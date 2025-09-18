import type { DataTablePageEvent, DataViewPageEvent } from "primevue";
import type { Filters } from "@/types";
import type { FetchPagination } from "../types";
import { ref, toRefs, watchEffect } from "vue";
import { useFetch } from "@/services";
import { filtersToLighthouse } from "../Filters/utils";
import type { OperationVariables } from "@apollo/client";

/**
 * Fornece a funcionalidade de fetch e paginação encapsuladas.
 * @see useFetch
 *
 * @param config Configuração da paginação e busca.
 */
export default function usePagination<
  TData,
  TVariables extends OperationVariables = OperationVariables,
>(config: FetchPagination<TData, TVariables>) {
  const { query, options, filterQuery, onDone } = toRefs(config);

  const limit = options.value.limit ?? 10;
  const page = options.value.page ?? 1;
  const loadOnMount = options.value.loadOnMount ?? true;

  const { fetch, data, refetch, loading } = useFetch<TData, TVariables>(
    {
      query: query.value,
      variables: { first: limit, page, ...filterQuery.value },
      options: options.value,
    },
    onDone?.value,
  );

  const getData = async () => await fetch();
  const lastPageFilter = ref();
  const lastRows = ref(limit);

  watchEffect(async () => {
    if (loadOnMount) getData();
  });

  const getPage = async (pageEvent: DataTablePageEvent | DataViewPageEvent) => {
    const { page, rows } = pageEvent;
    const filter: Filters = filterQuery?.value ?? {};

    // Type guard para resolver conflito de tipos entre DataTablePageEvent e DataViewPageEvent
    const filters = "filters" in pageEvent ? pageEvent.filters : {};

    // Salva o último filtro aplicado e a última seleção de linhas da tabela;
    lastPageFilter.value = filters;
    lastRows.value = rows;

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

  /**
   * Função personalizada de refetch que atualiza as variáveis do filtro customizado
   */
  const refetchPagination = async () => {
    const filter: Filters = filterQuery?.value ?? {};

    refetch.value({
      ...filter,
      where: {
        AND: filter.where
          ? [
              { ...filter.where },
              ...filtersToLighthouse(lastPageFilter.value ?? {}),
            ]
          : filtersToLighthouse(lastPageFilter.value ?? {}),
      },
      page,
      first: lastRows.value,
    });
  };

  return { getPage, fetch, data, loading, refetch: refetchPagination, getData };
}
