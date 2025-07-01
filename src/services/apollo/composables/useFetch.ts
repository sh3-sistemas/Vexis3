import { provideApolloClients, useQuery } from "@vue/apollo-composable";
import { inject, reactive, toRefs, type Ref } from "vue";

import { logErrorMessages } from "@vue/apollo-util";
import type { FetchParams, RefetechFn, UseFetchState } from "./types";
import {
  ApolloError,
  NetworkStatus,
  type ApolloQueryResult,
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
 *
 */
export default function useFetch<T>(
  onDone?: (result: ApolloQueryResult<T>) => void,
) {
  const clients = inject<ClientDict<T>>("clients") as ClientDict<T>;
  const state: UseFetchState<T> = reactive({
    data: {} as any,
    count: 0,
    loading: undefined,
    refetch: () => undefined,
    networkStatus: NetworkStatus.setVariables,
  });

  // Encapsulate the query inside an async function that you will return
  const fetch: FetchQuery<T> = async ({
    query,
    variables = {},
    options = {},
  }: FetchParams) => {
    const { loading, error, onError, onResult, refetch } = provideApolloClients(
      clients,
    )(() => useQuery<T>(query, variables, options));

    state.loading = loading;
    state.refetch = refetch;

    onResult((result) => {
      state.data = result.data;
      state.count =
        result.data && Array.isArray(result.data) ? result.data.length : 0;
      if (onDone && !result.loading) onDone(result);
    });

    onError((error) => {
      if (import.meta.env.NODE_ENV !== "production") {
        logErrorMessages(error);
      }

      state.data = {} as T;
    });

    return { loading, error, refetch };
  };

  return { ...toRefs(state), fetch };
}
