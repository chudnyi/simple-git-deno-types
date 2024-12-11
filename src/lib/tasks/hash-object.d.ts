import { StringTask } from '../types/index.d.ts';
/**
 * Task used by `git.hashObject`
 */
export declare function hashObjectTask(filePath: string, write: boolean): StringTask<string>;
