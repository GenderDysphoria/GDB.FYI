import { pDelay } from '@twipped/utils';
import log from 'fancy-log';
import fs from 'fs-extra';
import path from 'node:path';
import puppeteer from 'puppeteer';

import { resolve, ROOT_DIR } from '#gen/config';

import { serverWatchTask } from './server.js';

export default async function pdfs () {
  const manifest = await fs.readJSON(resolve('compiled', 'manifest.json'));
  const disposeServer = await serverWatchTask();

  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  for (const lang of Object.values(manifest.languages)) {
    const pubPath = resolve('public', lang.lang, 'gdb.pdf');
    const distPath = resolve('dist', lang.lang, 'gdb.pdf');

    await page.goto(`http://127.0.0.1:8080/${lang.lang}/fulltext`);
    await page.setViewport({ width: 1000, height: 2000, deviceScaleFactor: 2 });
    await page.pdf({ path: pubPath, format: 'A4', waitForFonts: true });
    await fs.copy(pubPath, distPath);
    log(`    Wrote ${path.relative(ROOT_DIR, pubPath)} and ${path.relative(ROOT_DIR, distPath)}`);
  }

  await browser.close();
  await disposeServer();
}
