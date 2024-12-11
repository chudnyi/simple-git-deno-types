import { StringTask } from '../types/index.d.ts';
import { DiffResult } from '../../../typings/index.d.ts';
import { EmptyTask } from './task.d.ts';
export declare function diffSummaryTask(customArgs: string[]): StringTask<DiffResult> | EmptyTask;
export declare function validateLogFormatConfig(customArgs: unknown[]): EmptyTask | void;
