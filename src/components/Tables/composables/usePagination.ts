import type { DataTablePageEvent, DataViewPageEvent } from "primevue";
import { toRefs, watchEffect } from "vue";
import type { Fetch } from "../types";
import { useFetch } from "@/services";
import { filtersToLighthouse } from "../Filters/utils";
import type { Filters } from "@/types";

/**
 *
 * @param fetch
 * @param config
 * @param refetch
 */
export default function usePagination<T>(config: Fetch<T>) {
  const { query, options, filterQuery, onDone } = toRefs(config);
  const { fetch, data, refetch, loading } = useFetch<T>(onDone?.value);
  const limit = options.value.limit ?? 10;
  const page = options.value.page ?? 1;

  const getData = async () =>
    await fetch({
      query: query.value,
      variables: { first: limit, page, ...filterQuery.value },
      options: options.value,
    });

  watchEffect(async () => getData());

  const getPage = async (pageEvent: DataTablePageEvent | DataViewPageEvent) => {
    const { page, rows } = pageEvent;
    const filter: Filters = filterQuery?.value ?? {};

    /*Type guard para resolver conflito de tipos entre DataTablePageEvent e DataViewPageEvent*/
    const filters = "filters" in pageEvent ? pageEvent.filters : {};
    await refetch.value({
      ...filter,
      where: {
        AND: filter.where
          ? [{ ...filter.where }, ...filtersToLighthouse(filters)]
          : filtersToLighthouse(filters),
      },
      page,
      first: rows,
    });
  };

  return { getPage, fetch, data, loading, refetch };
}
