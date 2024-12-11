import { SimpleGitFactory } from '../../typings/index.d.ts';
import * as api from './api.d.ts';
import { SimpleGitOptions } from './types/index.d.ts';
/**
 * Adds the necessary properties to the supplied object to enable it for use as
 * the default export of a module.
 *
 * Eg: `module.exports = esModuleFactory({ something () {} })`
 */
export declare function esModuleFactory<T>(defaultExport: T): T & {
    __esModule: true;
    default: T;
};
export declare function gitExportFactory(factory: SimpleGitFactory): SimpleGitFactory & typeof api;
export declare function gitInstanceFactory(baseDir?: string | Partial<SimpleGitOptions>, options?: Partial<SimpleGitOptions>): any;
