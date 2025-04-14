import type {
  DataTableFilterMeta,
  DataTableFilterMetaData,
  DataTableOperatorFilterMetaData,
} from "primevue/datatable";
import type { WhereFilter } from "@/types";

export const getFilterName = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter}`).toUpperCase();

export const matchModeToOperator = {
  startsWith: "LIKE",
  contains: "LIKE",
  notContains: "NOT_LIKE",
  endsWith: "LIKE",
  equals: "EQ",
  notEquals: "NEQ",
  in: "IN",
  lt: "LT",
  lte: "LTE",
  gt: "GT",
  gte: "GTE",
  between: "BETWEEN",
  dateIs: "EQ",
  dateIsNot: "NEQ",
  dateBefore: "EQ",
  dateAfter: "EQ",
};

const matchModeValue = {
  startsWith: (value: string) => value.concat("%"),
  contains: (value: string) => "%".concat(value, "%"),
  notContains: (value: string) => "%".concat(value, "%"),
  endsWith: (value: string) => "%".concat(value),
  equals: (value: string | number | boolean) => value,
  notEquals: (value: string | number | boolean) => value,
  in: (array: string[] | number[]) => array,
  lt: (value: string | number) => value,
  lte: (value: string | number) => value,
  gt: (value: string | number) => value,
  gte: (value: string | number) => value,
  between: (array: number[]) => array,
  dateIs: (value: Date) => value,
  dateIsNot: (value: Date) => value,
  dateBefore: (value: Date) => value,
  dateAfter: (value: Date) => value,
};
export const getMatchModeValue = (
  filter: DataTableFilterMetaData,
): string | string[] | number | number[] | boolean | Date => {
  const key = <keyof typeof matchModeValue>(filter.matchMode ?? "startsWith");
  return matchModeValue[key](filter.value);
};

const filterObject = (
  name: string,
  filter: string | DataTableFilterMetaData | DataTableOperatorFilterMetaData,
): WhereFilter | null => {
  const condition = {
    AND: convertFilters(name.substring(name.indexOf(".") + 1), filter),
  };
  return condition.AND
    ? <WhereFilter>{
        HAS: {
          relation: name.split(".")[0],
          condition,
        },
      }
    : null;
};

const filterMenu = (
  name: string,
  filter: DataTableOperatorFilterMetaData,
): WhereFilter | null => {
  const operator = filter.operator.toUpperCase();
  const operatorFilter = {
    [operator]: [
      ...filter.constraints.flatMap((x: DataTableFilterMetaData) =>
        convertFilters(name, x),
      ),
    ],
  };
  return operatorFilter[operator].length ? operatorFilter : null;
};

const filterRow = (
  name: string,
  filter: DataTableFilterMetaData,
): WhereFilter | null => {
  const key = (filter.matchMode ??
    "equals") as keyof typeof matchModeToOperator;
  return filter.value != null
    ? <WhereFilter>{
        column: name,
        operator: matchModeToOperator[key],
        value: getMatchModeValue(filter),
      }
    : null;
};

const convertFilters = (
  name: string,
  filter: string | DataTableFilterMetaData | DataTableOperatorFilterMetaData,
): WhereFilter | null => {
  if (name.includes(".")) {
    return filterObject(name, filter);
  } else {
    const filterOperator = <DataTableOperatorFilterMetaData>filter;
    return filterOperator.operator
      ? filterMenu(name, filterOperator)
      : filterRow(name, <DataTableFilterMetaData>filter);
  }
};

export const filtersToLighthouse = (
  filters: DataTableFilterMeta,
): WhereFilter[] =>
  Object.keys(filters).flatMap(
    (x) => convertFilters(getFilterName(x), filters[x]) ?? [],
  );
