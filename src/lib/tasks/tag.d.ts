import { TagResult } from '../../../typings/index.d.ts';
import { StringTask } from '../types/index.d.ts';
/**
 * Task used by `git.tags`
 */
export declare function tagListTask(customArgs?: string[]): StringTask<TagResult>;
/**
 * Task used by `git.addTag`
 */
export declare function addTagTask(name: string): StringTask<{
    name: string;
}>;
/**
 * Task used by `git.addTag`
 */
export declare function addAnnotatedTagTask(name: string, tagMessage: string): StringTask<{
    name: string;
}>;
