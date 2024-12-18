import { DiffResult, DiffResultBinaryFile, DiffResultTextFile } from '../../../typings/index.d.ts';
/***
 * The DiffSummary is returned as a response to getting `git().status()`
 */
export declare class DiffSummary implements DiffResult {
    changed: number;
    deletions: number;
    insertions: number;
    files: Array<DiffResultTextFile | DiffResultBinaryFile>;
}
