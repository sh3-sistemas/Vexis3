import type { FetchParams, RefetechFn, UseFetchState } from "./types";
import type { ClientDict } from "../types";
import { provideApolloClients, useLazyQuery } from "@vue/apollo-composable";
import { inject, reactive, toRefs, type Ref, watch } from "vue";
import { logErrorMessages } from "@vue/apollo-util";
import {
  ApolloError,
  NetworkStatus,
  type ApolloQueryResult,
  type OperationVariables,
} from "@apollo/client";

export type FetchQuery<T> = ({
  query,
  variables,
  options,
}: FetchParams<T>) => Promise<{
  loading: Ref<boolean, boolean>;
  error: Ref<ApolloError | null, ApolloError | null>;
  refetch: RefetechFn<T>;
}>;

/**
 * Um composable para executar queries GraphQL do Apollo de forma imperativa (lazy).
 * @param onDone Callback opcional a ser executado quando a query for concluída com sucesso.
 */
export default function useFetch<
  TData,
  TVariables extends OperationVariables = OperationVariables,
>(
  { query, variables, options }: FetchParams<TData, TVariables>,
  onDone?: (result: ApolloQueryResult<TData>) => void,
) {
  const clients = inject<ClientDict<TData>>("clients") as ClientDict<TData>;
  const state: UseFetchState<TData> = reactive({
    data: {} as any,
    count: 0,
    loading: undefined,
    refetch: () => undefined,
    networkStatus: NetworkStatus.setVariables,
  });

  const { loading, onResult, onError, load, refetch } = provideApolloClients(
    clients,
  )(() => useLazyQuery<TData>(query, variables, options));

  // Atualiza o estado de loading reativamente
  watch(loading, (newValue: Ref<boolean, boolean>) => {
    state.loading = newValue;
  });

  state.refetch = refetch;

  onResult((queryResult) => {
    if (queryResult.data) {
      state.data = queryResult.data;
      state.count = Array.isArray(queryResult.data)
        ? queryResult.data.length
        : 0;
    }
    if (onDone && !queryResult.loading) onDone(queryResult);
  });

  onError((error) => {
    if (import.meta.env.NODE_ENV !== "production") {
      logErrorMessages(error);
    }
    state.data = {} as TData;
  });

  return { ...toRefs(state), fetch: load };
}
