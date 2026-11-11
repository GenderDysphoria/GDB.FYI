import execute from './exec.js';
import EN from '../public/en/_index.js';

const isLinux = process.platform === 'linux';

export const BUILD_HASH = (await execute(`git archive main | ${isLinux ? 'md5sum' : 'md5'}`)).slice(0, 8);
export const ENGLISH_HASH = (await execute('git log -1 --format=%H public/en/*')).slice(0, 8);
export const ENGLISH_VERSION = EN.version;
