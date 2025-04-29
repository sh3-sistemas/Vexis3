import type { DataTablePageEvent } from "primevue/datatable";
import { toRefs, watchEffect } from "vue";
import type { Fetch } from "../types";
import { useFetch } from "@/services";

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
  const filter = filterQuery?.value ?? {};

  const getData = async () =>
    await fetch({
      query: query.value,
      variables: { first: limit, page, ...filterQuery.value },
      options: options.value,
    });

  watchEffect(async () => getData());

  const getPage = async (pageEvent: DataTablePageEvent) => {
    const { page, filters, rows } = pageEvent;
    await refetch.value({
      ...filter,
      ...filters,
      page,
      first: rows,
    });
  };

  return { getPage, fetch, data, loading, refetch };
}
