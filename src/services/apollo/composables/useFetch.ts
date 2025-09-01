import type { FetchParams, RefetechFn, UseFetchState } from "./types";
import { provideApolloClients, useQuery } from "@vue/apollo-composable";
import {
  ref,
  inject,
  reactive,
  toRefs,
  type Ref,
  isRef,
  type UnwrapRef,
} from "vue";
import { logErrorMessages } from "@vue/apollo-util";
import {
  ApolloError,
  NetworkStatus,
  type ApolloQueryResult,
  type OperationVariables,
} from "@apollo/client";
import type { ClientDict } from "../types";

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
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(onDone?: (result: ApolloQueryResult<TData>) => void) {
  const clients = inject<ClientDict<TData>>("clients") as ClientDict<TData>;

  // Controle dinâmico da query
  const queryDocument = ref<any | null>(null);
  const queryVariables = ref<any>();
  const queryOptions = ref<any>({
    // aguarda a chamada de fetch()
    enabled: false,
  });

  const { loading, error, onResult, onError, refetch, networkStatus } =
    provideApolloClients(clients)(() =>
      useQuery<TData, TVariables>(queryDocument, queryVariables, queryOptions),
    );

  // O estado reativo que será exposto para o componente.
  const state = reactive<UseFetchState<TData>>({
    data: null as TData | null,
    count: 0,
    loading,
    refetch: refetch as RefetechFn<TData>,
    networkStatus: networkStatus as unknown as NetworkStatus,
  });

  onResult((result) => {
    if (!result.loading) {
      const resultData = isRef(result.data) ? result.data.value : result.data;
      state.data = (resultData as UnwrapRef<TData>) ?? null;
      state.count =
        resultData && Array.isArray(result.data) ? result.data.length : 0;
      if (onDone && !result.loading) onDone(result);
    }
  });

  onError((error) => {
    // poderá ser ajustado futuramente para os diferentes ambientes
    if (import.meta.env.DEV) {
      logErrorMessages(error);
    }
    // Resetar o estado em caso de erro.
    state.data = null;
    state.count = 0;
  });

  const fetch = async <
    FData = TData,
    FVars extends OperationVariables = TVariables,
  >({
    query,
    variables,
    options,
  }: FetchParams<FData, FVars>) => {
    queryDocument.value = query;
    queryVariables.value = variables;
    // Comportamento de lazy query
    queryOptions.value = { ...options, enabled: true };

    return { loading, error, refetch };
  };

  return { ...toRefs(state), fetch };
}
