#!/usr/bin/env node

import { hot } from 'hot-hook';
import minimist from 'minimist';
import { register } from 'node:module';

register(import.meta.resolve('./loader-mdx.js'));
register(import.meta.resolve('import-essex'));

// import { registerHooks } from 'node:module';
// import * as ImportEssex from 'import-essex';
// import * as ImportMDX from './loader-mdx.js';

// registerHooks(ImportMDX);
// registerHooks(ImportEssex);

const {
  _: [ command, ...args ],
  ...flags
} = minimist(process.argv.slice(2));

if (flags.hot !== false && args[0] === 'watch') {
  await hot.init({
    root: import.meta.filename,
  });
}

const { default: gen } = await import('./index.js');
await gen(command, args, flags);
