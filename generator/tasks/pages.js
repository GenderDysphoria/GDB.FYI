import { createIntl, createIntlCache } from '@formatjs/intl';
import { keyBy, threepiece } from '@twipped/utils';
import { RawHtml, render } from 'essex';
import log from 'fancy-log';
import glob from 'fast-glob';
import fs from 'fs-extra';
import { minify } from 'html-minifier-terser';
import path from 'node:path';

import BUILD_HASH from '#gen/build-hash';
import { ROOT_DIR, IS_PROD, resolve } from '#gen/config';
import { headingComponents } from '#src/components/Headers';
import HtmlPage from '#src/components/HtmlPage';
import Template from '#src/components/Template/Template';

const INDEX_GLOB = 'public/*/_index.js';
const PAGE_GLOB = [ 'public/**/*.{mdx,js}' ];
const IGNORE_GLOB = [ 'public/**/_*.mdx', 'public/static/**', INDEX_GLOB ];
const COMPONENT_GLOB = 'src/components/**/*.js';
export const WATCH_GLOB = [
  ...PAGE_GLOB,
  INDEX_GLOB,
  COMPONENT_GLOB,
  '!public/**/_*.mdx',
  '!public/static/**',
];

const CANONICAL_ROOT = 'https://v2.gdb.fyi/';

const MINIFY_CONFIG = {
  conservativeCollapse: true,
  collapseWhitespace: true,
  minifyCSS: true,
  removeComments: true,
  removeRedundantAttributes: true,
};

const shrink = (input) => (IS_PROD ? minify(input, MINIFY_CONFIG) : input);

const intlCache = createIntlCache();

const mtime = (f) =>
  fs.stat(resolve(f))
    .catch(() => null)
    .then((stats) => (stats && new Date(stats.mtimeMs)));

async function loadPage (relPath, options = {}) {
  const {
    cwd = ROOT_DIR,
  } = options;

  const absPath = path.resolve(cwd, relPath);

  const { default: Page, meta: sourceMeta } = await import(absPath + `?update=${Date.now()}`);
  const meta = {
    ...sourceMeta,
    file: relPath,
    mtime: await mtime(absPath),
    Page,
  };

  if (!meta.lang) {
    [ , meta.lang ] = relPath.match(/\/(.+)\//) || [ null, 'en' ];
  }
  if (!meta.lang) {
    meta.lang = 'en';
  }

  if (!meta.url) {
    // if we're loading an index.js or index.mdx, it should become such
    if (path.basename(relPath).startsWith('index.')) {
      meta.url = path.dirname(relPath).replace(/^public/, '') + '/';
    } else {
      [ , meta.url ] = relPath.match(/public(\/.+?)(?:index)?\.(?:mdx|jsx?)/) || [];
    }
  }

  if (!meta.output) {
    if (path.extname(meta.url)) {
      meta.output = meta.url.slice(1);
    } else {
      meta.output = path.join(meta.url.slice(1), 'index.html');
    }
  }

  if (meta.aliases) {
    meta.aliases = meta.aliases.map((uri) => {
      if (path.extname(uri)) {
        return uri.slice(1);
      } else {
        return path.join(uri.slice(1), 'index.html');
      }
    });
  }

  return meta;
}

async function loadPages (options = {}) {
  const {
    cwd = ROOT_DIR,
    deep,
    followSymbolicLinks = true,
    ignore = IGNORE_GLOB,
    dot = true,
    pageGlob = PAGE_GLOB,
  } = options;

  const inputs = await glob(pageGlob, {
    cwd,
    deep,
    followSymbolicLinks,
    ignore,
    onlyFiles: true,
    dot,
  });

  const pages = {};
  const routes = {};
  await Promise.all(
    inputs.map(async (relPath) => {
      const meta = await loadPage(relPath).catch((e) => {
        console.error('Error while loading ' + relPath);
        throw e;
      });
      if (pages[meta.url]) {
        log.error(`Duplicate page for ${meta.url}`, pages[meta.url], meta);
      }
      if (routes[meta.url]) {
        log.error(`Duplicate route for ${meta.url}`, routes[meta.url], meta.file);
      }
      pages[meta.url] = meta;
      routes[meta.url] = meta.file;
    })
  );

  return { pages, routes };
}

async function loadIndexes (options = {}) {
  const {
    cwd = ROOT_DIR,
    deep,
    followSymbolicLinks = true,
    ignore,
    dot = true,
    indexGlob = INDEX_GLOB,
  } = options;

  const inputs = await glob(indexGlob, {
    cwd,
    deep,
    followSymbolicLinks,
    ignore,
    onlyFiles: true,
    dot,
  });

  const languages = {};

  await Promise.all(
    inputs.map(async (relPath) => {
      const absPath = resolve(relPath);
      const language = (await import(absPath)).default;
      languages[language.lang] = language;
    })
  );
  // console.log(languages);
  return languages;
}

let manifest;
async function buildManifest (options = {}) {
  const {
    cwd = ROOT_DIR,
    manifestDest = 'compiled/manifest.json',
  } = options;

  const [ { pages, routes }, languages ] = await Promise.all([
    loadPages(options),
    loadIndexes(options),
  ]);

  for (const lang of Object.values(languages)) {
    lang.pages = threepiece(lang.pages, ([ , prev ] = [], [ , curr ] = [], [ , next ] = []) => {
      const page = pages[curr];
      if (!page) {
        throw new Error(`Could not find a file matching the indexed url ${curr}. Did you put unicode in your urls again?`);
      }
      page.previous = prev;
      page.next = next;
      return page;
    });
    lang.keyed = keyBy(lang.pages, 'key');
    lang.intl = createIntl({ locale: lang.lang, messages: lang.messages }, intlCache);

    if (!lang.intl) {
      throw new Error(`Could not load internationalization for ${lang.lang}`);
    }
  }

  manifest = { pages, routes, languages };

  const destPath = path.resolve(cwd, manifestDest);
  await fs.ensureFile(destPath);
  await fs.writeFile(destPath, JSON.stringify(manifest, null, 2));
  log(`    Manifest written to ${path.relative(ROOT_DIR, destPath)}`);
}

function PageWrapper ({ children, ...props }) {
  return (
    <HtmlPage
      {...props}
    >
      <Template>
        {children}
      </Template>
    </HtmlPage>
  );
}

async function renderPageBody (page, options = {}) {
  const {
    cwd = ROOT_DIR,
    distPath,
  } = options = {
    distPath: 'dist',
    ...options,
  };

  const canonical = new URL(page.url, CANONICAL_ROOT).href;
  try {
    const { Page: PageBody } = page;
    const lang = manifest.languages[page.lang];
    const Pw = page.wrapper || PageWrapper;
    page.body = await render(
      <Pw
        lang={page.lang}
        title={page.title}
        canonical={canonical}
      >
        <PageBody components={headingComponents} />
      </Pw>,
      {
        metadata: page,
        BUILD_HASH,
        lang,
        intl: lang.intl,
        pages: manifest.pages,
        routes: manifest.routes,
        languages: manifest.languages,
        CANONICAL_ROOT,
      }
    );

    try {
      page.body = await shrink(page.body);
    } catch (e) {
      e.message = `Error while minifying page "${page.input}": ${e.message.slice(0, 50)}`;
      throw e;
    }

    const destPath = path.resolve(cwd, distPath, page.output);
    log(`    Wrote ${path.relative(ROOT_DIR, destPath)}`);
    await fs.ensureFile(destPath);
    await fs.writeFile(destPath, page.body);
  } catch (e) {
    e.message = `Error while rendering ${page.file}: ${e.message}`;
    throw e;
  }

  await renderPageAliases(page, options);

  return page;
}

async function renderPageAliases (page, options = {}) {
  const {
    cwd = ROOT_DIR,
    distPath,
  } = options = {
    distPath: 'dist',
    ...options,
  };

  if (!page.aliases?.length) return [];

  for (const alias of page.aliases) {
    let body;
    const canonical = new URL(page.url, CANONICAL_ROOT).href;
    try {
      const lang = manifest.languages[page.lang];
      const Pw = page.wrapper || PageWrapper;
      page.body = await render(
        <Pw
          lang={page.lang}
          title={page.title}
          canonical={canonical}
        >
          <RawHtml>{`<meta http-equiv="refresh" content="0; URL='${canonical}'" />`}</RawHtml>
        </Pw>,
        {
          metadata: page,
          BUILD_HASH,
          lang,
          intl: lang.intl,
          pages: manifest.pages,
          routes: manifest.routes,
          languages: manifest.languages,
          CANONICAL_ROOT,
        }
      );

      try {
        body = await shrink(page.body);
      } catch (e) {
        e.message = `Error while minifying alias "${alias}": ${e.message.slice(0, 50)}`;
        throw e;
      }

      const destPath = path.resolve(cwd, distPath, alias);
      log(`    Wrote ${path.relative(ROOT_DIR, destPath)}`);
      await fs.ensureFile(destPath);
      await fs.writeFile(destPath, body);
    } catch (e) {
      e.message = `Error while rendering ${page.file} alias ${alias}: ${e.message}`;
      throw e;
    }
  }
}

async function renderAllPages (options = {}) {
  await Promise.all(
    Object.values(manifest.pages).map((page) => renderPageBody(page, options))
  );
}

export default async function pagesTask (options = {}) {
  await buildManifest(options);
  await renderAllPages(options);
}
