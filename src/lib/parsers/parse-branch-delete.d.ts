import { BranchMultiDeleteResult } from '../../../typings/index.d.ts';
import { TaskParser } from '../types/index.d.ts';
import { ExitCodes } from '../utils/index.d.ts';
export declare const parseBranchDeletions: TaskParser<string, BranchMultiDeleteResult>;
export declare function hasBranchDeletionError(data: string, processExitCode: ExitCodes): boolean;
