import { PushResult } from '../../../typings/index.d.ts';
import { StringTask } from '../types/index.d.ts';
declare type PushRef = {
    remote?: string;
    branch?: string;
};
export declare function pushTagsTask(ref: PushRef | undefined, customArgs: string[]): StringTask<PushResult>;
export declare function pushTask(ref: PushRef | undefined, customArgs: string[]): StringTask<PushResult>;
export {};
