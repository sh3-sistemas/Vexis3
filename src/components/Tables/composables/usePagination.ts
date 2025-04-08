import type { DataTablePageEvent, DataViewPageEvent } from "primevue";
import { onMounted, toRefs, watchEffect } from "vue";
import type { Fetch } from "../types";
import { useFetch } from "@/services";

/**
 *
 * @param fetch
 * @param config
 * @param refetch
 */
export default function usePagination<T>(config: Fetch<T>) {
  const { fetch, data, refetch, loading } = useFetch<T>();
  const { query, options, filterQuery } = toRefs(config);
  const limit = options.value.limit ?? 10;
  const page = options.value.page ?? 1;
  const filter = filterQuery?.value ?? {};

  const getData = async () =>
    await fetch({
      query: query.value,
      variables: { first: limit, page, ...filterQuery.value },
      options: options.value,
    });

  watchEffect(async () => getData());
  onMounted(async () => getData());

  const getPage = async (pageEvent: DataTablePageEvent | DataViewPageEvent) => {
    const { page, rows } = pageEvent;
    /*Type guard para resolver conflito de tipos entre DataTablePageEvent e DataViewPageEvent*/
    const filters = "filters" in pageEvent ? pageEvent.filters : {};
    await refetch.value({
      ...filter,
      ...filters,
      page,
      first: rows,
    });
  };

  return { getPage, fetch, data, loading, refetch };
}
