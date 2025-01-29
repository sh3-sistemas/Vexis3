import type { CrudOperations } from "@/services";
import type { DocumentNode } from "graphql";
import type { FilterQuery, HandlerType, WhereFilter } from "./filter";
import type { DataTableItemColumn } from "@/components/Tables/DataTable/types";

export type Filters = {
  /**
   * Lista de condições de consulta para o filtro.
   */
  query?: FilterQuery[];
  /*
   * Lighthouse Where Conditions
   */
  where?: WhereFilter;

  /* Aceite p/ qualquer tipo de filtro uma vez
   * que nem todos estão padronizados p/ Lighthouse */
  [any: string]: any;
};

/**
 * Define os filtros de um módulo.
 */
export type ModuleFilters = {
  /**
   * Filtro "localizar", contendo uma lista de consultas de filtro.
   */
  localizar: Filters;
};

/**
 * Define a estrutura de uma coluna na tabela de metadados.
 */
export type MetaColumn = DataTableItemColumn & { filterType: HandlerType };

/**
 * Defines the metadata structure for a module.
 */
export type ModuleMeta = {
  /**
   * The list of columns for the module.
   */
  columns: MetaColumn[];
};

/**
 * Defines the structure for getters in a module.
 */
export type ModuleGetters = {
  /**
   * GraphQL mutation to fetch the list of items in the module.
   */
  list?: DocumentNode;

  /**
   * GraphQL mutation to fetch a single item in the module.
   */
  single?: DocumentNode;
};

/**
 * Defines the structure for a generic module.
 */
export type Module = {
  /**
   * Funções CRUD específicas do módulo.
   */
  crud: CrudOperations;

  /**
   * Getters do módulo.
   */
  getters: ModuleGetters;

  /**
   * Metadados do módulo.
   */
  meta: ModuleMeta;

  /**
   * Filtros aplicáveis ao módulo.
   */
  filters?: ModuleFilters;
};

/**
 * Defines the structure for the root object containing multiple modules dynamically.
 */
export type RootModules = Record<string, Module>;
