import type { DataTablePageEvent, DataViewPageEvent } from "primevue";
import type { Filters } from "@/types";
import type { Fetch } from "../types";
import { toRefs, watchEffect } from "vue";
import { useFetch } from "@/services";
import { filtersToLighthouse } from "../Filters/utils";

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
  const loadOnMount = options.value.loadOnMount ?? true;

  const getData = async () =>
    await fetch({
      query: query.value,
      variables: { first: limit, page, ...filterQuery.value },
      options: options.value,
    });

  watchEffect(async () => {
    if (loadOnMount) getData();
  });

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

  return { getPage, fetch, data, loading, refetch, getData };
}
