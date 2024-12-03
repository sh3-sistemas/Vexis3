import type { DataTableItemColumn } from "@/components/Tables/DataTable/types";
import type { DocumentNode } from "graphql";

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
   * GraphQL mutations to retrieve module data.
   */
  getters: ModuleGetters;

  /**
   * Metadata about the module.
   */
  meta: ModuleMeta;
};

/**
 * Defines the structure for the root object containing multiple modules dynamically.
 */
export type RootModules = Record<string, Module>;
