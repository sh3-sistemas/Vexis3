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

const convertFilters = (
  name: string,
  filter: string | DataTableFilterMetaData | DataTableOperatorFilterMetaData,
): WhereFilter | null => {
  if (name.includes(".")) {
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
  } else {
    const filterOperator = <DataTableOperatorFilterMetaData>filter;
    if (filterOperator.operator) {
      const operator = filterOperator.operator.toUpperCase();
      const operatorFilter = {
        [operator]: [
          ...filterOperator.constraints.flatMap((x: DataTableFilterMetaData) =>
            convertFilters(name, x),
          ),
        ],
      };
      return operatorFilter[operator].length ? operatorFilter : null;
    } else {
      const filterValue = <DataTableFilterMetaData>filter;
      const key = (filterValue.matchMode ??
        "equals") as keyof typeof matchModeToOperator;
      return filterValue.value != null
        ? <WhereFilter>{
            column: name,
            operator: matchModeToOperator[key],
            value: getMatchModeValue(filterValue),
          }
        : null;
    }
  }
};

export const filtersToLighthouse = (
  filters: DataTableFilterMeta,
): WhereFilter[] =>
  Object.keys(filters).flatMap(
    (x) => convertFilters(getFilterName(x), filters[x]) ?? [],
  );
