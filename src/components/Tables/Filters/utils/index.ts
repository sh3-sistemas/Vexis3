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
};

const matchModeValue = {
  startsWith: (str: string) => str.concat("%"),
  contains: (str: string) => "%".concat(str, "%"),
  notContains: (str: string) => "%".concat(str, "%"),
  endsWith: (str: string) => "%".concat(str),
  equals: (str: string) => str,
  notEquals: (str: string) => str,
};
export const getMatchModeValue = (filter: DataTableFilterMetaData) => {
  const filteredValue = matchModeValue[filter.matchMode];
  return filteredValue ? filteredValue(filter.value) : filter.value;
};

const convertFilters = (
  name: string,
  filter: DataTableFilterMetaData | DataTableOperatorFilterMetaData
) => <WhereFilter | WhereFilter[] | []>(name.includes(".")
    ? {
        HAS: {
          relation: name.split(".")[0],
          condition: {
            AND: convertFilters(name.substring(name.indexOf(".") + 1), filter),
          },
        },
      }
    : [
        ...(filter.operator
          ? [
              {
                [filter.operator.toUpperCase()]: [
                  ...filter.constraints.flatMap((x: DataTableFilterMetaData) =>
                    convertFilters(name, x)
                  ),
                ],
              },
            ]
          : []),
        ...(filter.value != null
          ? [
              {
                column: name,
                operator: matchModeToOperator[filter.matchMode] ?? "EQ",
                value: getMatchModeValue(filter),
              },
            ]
          : []),
      ]);

export const filtersToLighthouse = (filters: DataTableFilterMeta) =>
  <WhereFilter[]>(
    Object.keys(filters).flatMap((x) =>
      convertFilters(getFilterName(x), filters[x])
    )
  );
