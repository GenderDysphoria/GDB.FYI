import { createLoader } from '@mdx-js/node-loader';
import remarkGfm from 'remark-gfm';

const mdxLoader = createLoader({
  jsxRuntime: 'automatic',
  jsxImportSource: 'essex',
  remarkPlugins: [ remarkGfm ],
  development: true,
});

/**
 * Load `file:` URLs to MD(X) files.
 */
export const load = mdxLoader.load;
