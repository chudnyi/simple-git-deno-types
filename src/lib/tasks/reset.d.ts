import { Maybe, OptionFlags, Options } from '../types/index.d.ts';
export declare enum ResetMode {
    MIXED = "mixed",
    SOFT = "soft",
    HARD = "hard",
    MERGE = "merge",
    KEEP = "keep"
}
export declare type ResetOptions = Options & OptionFlags<'-q' | '--quiet' | '--no-quiet' | '--pathspec-from-nul'> & OptionFlags<'--pathspec-from-file', string>;
export declare function resetTask(mode: Maybe<ResetMode>, customArgs: string[]): import("../types/index.d.ts").StringTask<string>;
export declare function getResetMode(mode: ResetMode | any): Maybe<ResetMode>;
