import { MergeResult } from '../../../typings/index.d.ts';
import { StringTask } from '../types/index.d.ts';
import { EmptyTask } from './task.d.ts';
export declare function mergeTask(customArgs: string[]): EmptyTask | StringTask<MergeResult>;
