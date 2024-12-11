import { CleanSummary } from '../../../typings/index.d.ts';
export declare class CleanResponse implements CleanSummary {
    readonly dryRun: boolean;
    paths: string[];
    files: string[];
    folders: string[];
    constructor(dryRun: boolean);
}
export declare function cleanSummaryParser(dryRun: boolean, text: string): CleanSummary;
