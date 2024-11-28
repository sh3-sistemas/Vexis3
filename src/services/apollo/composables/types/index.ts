import type {
  ApolloQueryResult,
  OperationVariables,
} from "@apollo/client/core/types";
import type {
  DocumentParameter,
  OptionsParameter,
  VariablesParameter,
} from "@vue/apollo-composable/dist/useQuery.js";
import type { DocumentNode } from "graphql";

export enum FORM_MODE {
  INCLUIR = "incluir",
  LOCALIZAR = "localizar",
}
export enum CRUD_EVENTS {
  "onCreate" = "create",
  "onUpdate" = "update",
  "onDelete" = "delete",
}
export type CrudEventKey = keyof typeof CRUD_EVENTS;

export type CrudOperations = {
  create: DocumentNode;
  delete: DocumentNode;
  update: DocumentNode;
};
export type UseCrudProps<T> = {
  crud: CrudOperations;
  clientId: string;
  toastResponse: {
    delete?: string;
    create?: string;
    update?: string;
    enable: boolean;
  };
  variablesCallback?: (localizar: T, form: T) => T;
  onDoneCallback?: (event: CrudEventKey, response: object) => void;
};

export type UseCrudEmits = (
  event: "onCreate" | "onUpdate" | "onDelete",
  ...args: any[]
) => void;

export type FetchParams<
  TResult = unknown,
  TVariables extends OperationVariables = OperationVariables,
> = {
  query: DocumentParameter<TResult, TVariables>;
  variables: VariablesParameter<TVariables>;
  options: OptionsParameter<TResult, TVariables>;
};

export type UseFetchState<T> = Omit<ApolloQueryResult<T>, "data"> & {
  count: number;
  refetch: RefetechFn<T> | undefined;
  data: T | T[];
};
export type RefetechFn<T> = (
  variables?: OperationVariables | undefined,
) => Promise<ApolloQueryResult<T>> | undefined;
