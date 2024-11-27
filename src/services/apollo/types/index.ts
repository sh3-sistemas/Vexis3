import { ApolloClient } from "@apollo/client";

export type ClientId = string;
export type ClientDict<T> = Record<ClientId, ApolloClient<T>>;
