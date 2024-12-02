import { provideApolloClients, useQuery } from "@vue/apollo-composable";
import { inject, reactive, toRefs } from "vue";

import { logErrorMessages } from "@vue/apollo-util";
import type { FetchParams, UseFetchState } from "./types";
import { NetworkStatus } from "@apollo/client";
import type { ClientDict } from "../types";

/**
 *
 */
export default function useFetch<T>() {
  const clients = inject<ClientDict<T>>("clients") as ClientDict<T>;
  const state: UseFetchState<T> = reactive({
    data: {} as any,
    count: 0,
    loading: false,
    refetch: undefined,
    networkStatus: NetworkStatus.setVariables,
  });

  // Encapsulate the query inside an async function that you will return
  const fetch = async ({
    query,
    variables = {},
    options = {},
  }: FetchParams) => {
    const { loading, error, onError, onResult, refetch } = provideApolloClients(
      clients,
    )(() => useQuery<T>(query, variables, options));

    state.loading = loading.value;
    state.refetch = refetch;

    onResult((result) => {
      state.data = result.data;
      state.loading = result.loading;
      state.count =
        result.data && Array.isArray(result.data) ? result.data.length : 0;
    });

    onError((error) => {
      if (import.meta.env.NODE_ENV !== "production") {
        logErrorMessages(error);
      }

      state.data = Array.isArray(state.data) ? ([] as T[]) : ({} as T);
    });

    return { loading, error, refetch };
  };

  return { ...toRefs(state), fetch };
}
