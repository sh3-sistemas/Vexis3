import type { DataTablePageEvent } from "primevue/datatable";
import { onMounted, toRefs, watchEffect } from "vue";
import type { Fetch } from "../types";
import type { FetchQuery } from "@/services/apollo/composables/useFetch";
import type { RefetechFn } from "@/services";

/**
 *
 * @param fetch
 * @param config
 * @param refetch
 */
export default function usePagination<T>(
  fetch: FetchQuery<T>,
  config: Fetch<T>,
  refetch: RefetechFn<T>,
) {
  const { query, options, filterQuery } = toRefs(config);
  const limit = options.value.limit ?? 10;
  const page = options.value.page ?? 1;
  const filter = filterQuery?.value ?? {};

  watchEffect(async () => {
    console.log({ refetch });
    if (!(refetch as any).value) return;
    await (refetch as any).value({
      ...filterQuery.value,
      page,
      limit,
    });
  });

  onMounted(async () => {
    await fetch({
      query: query.value,
      variables: { limit, page, ...filter },
      options: options.value,
    });
  });

  const getPage = async (pageEvent: DataTablePageEvent) => {
    const { page, filters } = pageEvent;
    await (refetch as any).value({
      ...filter,
      ...filters,
      page,
      limit,
    });
  };

  return { getPage };
}
