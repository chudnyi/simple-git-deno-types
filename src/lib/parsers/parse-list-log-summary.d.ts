import { LogResult } from '../../../typings/index.d.ts';
import { LogFormat } from '../args/log-format.d.ts';
export declare const START_BOUNDARY = "\u00F2\u00F2\u00F2\u00F2\u00F2\u00F2 ";
export declare const COMMIT_BOUNDARY = " \u00F2\u00F2";
export declare const SPLITTER = " \u00F2 ";
export declare function createListLogSummaryParser<T = any>(splitter?: string, fields?: string[], logFormat?: LogFormat): (stdOut: string) => LogResult<T>;
