
import { Buffer } from "node:buffer";
/// <reference types="npm:@types/node" />
import { TaskResponseFormat } from '../types/index.d.ts';
export declare class GitOutputStreams<T extends TaskResponseFormat = Buffer> {
    readonly stdOut: T;
    readonly stdErr: T;
    constructor(stdOut: T, stdErr: T);
    asStrings(): GitOutputStreams<string>;
}
