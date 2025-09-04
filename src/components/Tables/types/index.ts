import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import type {
  DocumentParameter,
  VariablesParameter,
} from "@vue/apollo-composable/dist/useQuery.js";

export type FetchPaginationOptions = {
  /**
   * O identificador único do cliente que está realizando a operação de busca.
   */
  clientId: string;

  /**
   * O número máximo de itens que devem ser retornados na busca.
   * Este atributo é opcional, e se não for fornecido, pode-se definir um valor padrão.
   */
  limit?: number;

  /**
   * O número da página que deve ser retornada na operação de busca.
   * Normalmente usado para operações de paginação.
   */
  page: number;

  /**
   * Indica se os dados devem ser carregados automaticamente ao montar o componente.
   */
  loadOnMount?: boolean;
};

export type FetchPagination<
  TData,
  TVariables extends OperationVariables = OperationVariables,
> = {
  /**
   * Objeto que contém os critérios da consulta principal.
   * Aqui podem estar condições como chaves de pesquisa, datas, etc.
   */
  query: DocumentParameter<TData, TVariables>;

  /**
   * Um objeto que define filtros adicionais aplicados à busca.
   * Pode ser `null` caso não existam filtros adicionais.
   */
  filterQuery: VariablesParameter<TVariables> | null;

  /**
   * Um objeto que contém as opções adicionais para a busca, como clientId, paginação, etc.
   */
  options: FetchPaginationOptions;

  /**
   * Função de callback para o retorno do resultado da query
   */
  onDone?: (result: ApolloQueryResult<TData>) => void;
};
