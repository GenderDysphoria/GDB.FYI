import execute from './exec.js';
import EN from '../public/en/_index.js';

export const BUILD_HASH = (await execute('git archive main | md5')).slice(0, 8);
export const ENGLISH_HASH = (await execute('git log -1 --format=%H public/en/*')).slice(0, 8);
export const ENGLISH_VERSION = EN.version;
