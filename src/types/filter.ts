/**
 * Define uma consulta de filtro com coluna e valor.
 */
export type FilterQuery = {
  /**
   * Nome da coluna a ser filtrada.
   */
  coluna: string;

  /**
   * Valor a ser usado no filtro.
   */
  valor: string;
};

export enum SQLOperator {
  EQ = "EQ",
  NEQ = "NEQ",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
  LIKE = "LIKE",
  NOT_LIKE = "NOT_LIKE",
  IN = "IN",
  NOT_IN = "NOT_IN",
  IS_NULL = "IS_NULL",
  IS_NOT_NULL = "IS_NOT_NULL",
  BEETWEN = "BEETWEN",
  NOT_BEETWEN = "NOT_BEETWEN",
}

export type hasWhereFilter = {
  relation: string;
  condition?: WhereFilter;
  amount?: number;
  operator?: keyof typeof SQLOperator;
};

export type WhereFilter = {
  column?: string;
  operator?: keyof typeof SQLOperator;
  value?: string | number | boolean | any;
  AND?: WhereFilter[];
  OR?: WhereFilter[];
  HAS?: hasWhereFilter;
};

export type FilterHandlers = {
  id: (value: any) => boolean;
  number: (value: any) => boolean | number;
  boolean: (value: any) => boolean;
  text: (value: any) => boolean;
  date: (value: any) => boolean;
  month: (value: any) => boolean;
  object: (value: any) => boolean | number;
};

export type HandlerType = keyof FilterHandlers;
