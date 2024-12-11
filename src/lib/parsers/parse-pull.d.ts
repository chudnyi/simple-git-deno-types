import { PullDetail, PullResult } from '../../../typings/index.d.ts';
import { PullFailedSummary } from '../responses/PullSummary.d.ts';
import { TaskParser } from '../types/index.d.ts';
export declare const parsePullDetail: TaskParser<string, PullDetail>;
export declare const parsePullResult: TaskParser<string, PullResult>;
export declare function parsePullErrorResult(stdOut: string, stdErr: string): "" | PullFailedSummary;
