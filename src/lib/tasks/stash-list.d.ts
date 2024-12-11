import { LogOptions, LogResult } from '../../../typings/index.d.ts';
import type { StringTask } from '../types/index.d.ts';
import type { EmptyTask } from './task.d.ts';
export declare function stashListTask(opt: LogOptions<import("./log.d.ts").DefaultLogFields> | undefined, customArgs: string[]): EmptyTask | StringTask<LogResult>;
