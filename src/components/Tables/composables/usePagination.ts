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

  const getPage = async (pageEvent: DataTablePageEvent) => {
    const { page, filters, rows } = pageEvent;
    await refetch.value({
      ...filter,
      ...filters,
      page,
      first: rows,
    });
  };

  const getPageDataView = async (pageEvent: DataViewPageEvent) => {
    const { page, rows } = pageEvent;
    await refetch.value({
      ...filter,
      page,
      first: rows,
    });
  };

  return { getPage, getPageDataView, fetch, data, loading, refetch };
}
