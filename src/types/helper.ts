/**
 * Custom types
 */
export declare type Booleanish = boolean | "true" | "false";

export declare type Numberish = number | string;

export declare type Nullable<T = void> = T | null | undefined;

export declare type HintedString<T extends string> = (string & {}) | T;
