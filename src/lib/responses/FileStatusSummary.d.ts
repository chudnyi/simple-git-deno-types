import { FileStatusResult } from '../../../typings/index.d.ts';
export declare const fromPathRegex: RegExp;
export declare class FileStatusSummary implements FileStatusResult {
    path: string;
    index: string;
    working_dir: string;
    readonly from: string | undefined;
    constructor(path: string, index: string, working_dir: string);
}
