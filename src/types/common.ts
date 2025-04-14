import type { ObjectElement } from "@vueform/vueform";
import type Echo from "laravel-echo";
import type {
  ColumnProps,
  DataTablePageEvent,
  DataViewPageEvent,
} from "primevue";
import type Pusher from "pusher-js";
import type { FunctionalComponent, SVGAttributes } from "vue";

export type { DynamicDialogInstance } from "primevue/dynamicdialogoptions";

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

export type DataViewPaginationEvent = DataViewPageEvent;
export type DataTablePaginationEvent = DataTablePageEvent;
export type DataTableColumnProps = ColumnProps;
export type VueFormObjectElement = ObjectElement;

export interface EchoWindow {
  Pusher: typeof Pusher;
  Echo: Echo<any>;
}
