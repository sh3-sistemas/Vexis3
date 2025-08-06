import {
  ApolloClient,
  InMemoryCache,
  type DocumentNode,
  type NormalizedCacheObject,
} from "@apollo/client/core";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { onError } from "@apollo/client/link/error";
import {
  crudError,
  networkError,
  unauthenticatedError,
  unauthorizedError,
} from "./error";

type Headers = {
  Authorization?: string;
};

function getHeaders() {
  const headers: Headers = {};
  const token = localStorage.getItem("access-token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

export const createSH3ApolloClient = (
  uri: string,
): ApolloClient<NormalizedCacheObject> => {
  const cache = new InMemoryCache();

  const httpLink = createUploadLink({
    uri,
    headers: getHeaders(),
  });

  // Handle errors
  const errorLink = onError((error) => {
    console.error("error! " + uri, error);

    unauthorizedError(error); // check and handle if it is an error about unauthorization
    unauthenticatedError(error); // check and handle if it is an error about unauthentication
    crudError(error); // check and handle crud errors
    networkError(error); // check and handle erros about the network connection
  });

  return new ApolloClient({
    cache,
    link: errorLink.concat(httpLink),
  });
};

export const getQueryName = (
  query: { definitions: any[] } | DocumentNode | null | undefined,
) => {
  if (!query) return null;
  const definition = query.definitions.find((def) => def.operation == "query");
  if (!definition) return null;

  return definition.name.value;
};
