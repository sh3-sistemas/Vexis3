import type { DataTablePageEvent } from "primevue/datatable";
import { onMounted, toRefs, watchEffect, type Ref } from "vue";
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
  refetch: Ref<RefetechFn<T>>,
) {
  const { query, options, filterQuery } = toRefs(config);
  const limit = options.value.limit ?? 10;
  const page = options.value.page ?? 1;
  const filter = filterQuery?.value ?? {};

  watchEffect(async () => {
    if (!refetch.value) return;
    await refetch.value({
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
    await refetch.value({
      ...filter,
      ...filters,
      page,
      limit,
    });
  };

  return { getPage };
}
