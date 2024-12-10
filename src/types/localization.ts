import type { DataTableItemColumn } from "@/components/Tables/DataTable/types";
import type { CrudOperations } from "@/services";
import type { DocumentNode } from "graphql";

/**
 * Define uma consulta de filtro com coluna e valor.
 */
export type FilterQuery = {
  /**
   * Nome da coluna a ser filtrada.
   */
  coluna: string;

  /**
   * Valor a ser usado no filtro.
   */
  valor: string;
};

/**
 * Define os filtros de um módulo.
 */
export type ModuleFilters = {
  /**
   * Filtro "localizar", contendo uma lista de consultas de filtro.
   */
  localizar: {
    /**
     * Lista de condições de consulta para o filtro.
     */
    query: FilterQuery[];
  };
};

/**
 * Defines the metadata structure for a module.
 */
export type ModuleMeta = {
  /**
   * The list of columns for the module.
   */
  columns: DataTableItemColumn[];
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
