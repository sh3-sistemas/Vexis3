import type { DataTablePageEvent } from "primevue";
import type { FunctionalComponent, SVGAttributes } from "vue";

/**
 * Defines valid properties in common Icon properties component.
 */
export type IconProps = {
  /**
   * Name of the icon.
   */
  name: string;
  /**
   * Style of the icon.
   */
  styling: string;
};

export type CustomIcon =
  | FunctionalComponent<SVGAttributes, {}, any, {}>
  | string;

export type DataTablePaginationEvent = DataTablePageEvent;
