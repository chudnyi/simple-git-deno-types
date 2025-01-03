import { TagResult } from '../../../typings/index.d.ts';
export declare class TagList implements TagResult {
    readonly all: string[];
    readonly latest: string | undefined;
    constructor(all: string[], latest: string | undefined);
}
export declare const parseTagList: (data: string, customSort?: boolean) => TagList;
