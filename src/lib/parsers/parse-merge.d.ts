import { MergeDetail, MergeResult } from '../../../typings/index.d.ts';
import { TaskParser } from '../types/index.d.ts';
/**
 * Parse the complete response from `git.merge`
 */
export declare const parseMergeResult: TaskParser<string, MergeResult>;
/**
 * Parse the merge specific detail (ie: not the content also available in the pull detail) from `git.mnerge`
 * @param stdOut
 */
export declare const parseMergeDetail: TaskParser<string, MergeDetail>;
