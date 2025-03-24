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
  startsWith: (value: any) => String(value).concat("%"),
  contains: (value: any) => "%".concat(String(value), "%"),
  notContains: (value: any) => "%".concat(String(value), "%"),
  endsWith: (value: any) => "%".concat(String(value)),
  equals: (value: any) => value,
  notEquals: (value: any) => value,
  in: (array: any[]) => array,
  lt: (value: any) => value,
  lte: (value: any) => value,
  gt: (value: any) => value,
  gte: (value: any) => value,
  between: (array: any[]) => array,
  dateIs: (value: any) => value,
  dateIsNot: (value: any) => value,
  dateBefore: (value: any) => value,
  dateAfter: (value: any) => value,
};
export const getMatchModeValue = (
  filter: DataTableFilterMetaData,
): string | string[] => {
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
