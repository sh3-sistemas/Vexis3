import { type ObjectElement } from "@vueform/vueform";
import type Echo from "laravel-echo";
import type {
  ColumnProps,
  DataTablePageEvent,
  DataViewPageEvent,
} from "primevue";
import type Pusher from "pusher-js";
import type { FunctionalComponent, SVGAttributes } from "vue";
import type { DynamicDialogInstance as PrimevueDynamicDialogInstance } from "primevue/dynamicdialogoptions";

export type DynamicDialogInstance<T> = Omit<
  PrimevueDynamicDialogInstance,
  "data"
> & {
  data: T;
};

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

export interface BaseColorPallet {
  primary: Record<string | number, string>;
  [any: string]: Record<string | number, string>;
}

type VexisOptionsPrimaryColorScheme = {
  color?: string;
  contrastColor?: string;
  hoverColor?: string;
  activeColor?: string;
};

export interface VexisOptions {
  apollo: {
    clients: Record<string, any>;
  };
  moduleUrl: string;
  theme: {
    colorScheme?: {
      light?: {
        primary: VexisOptionsPrimaryColorScheme;
      };
      dark?: {
        primary: VexisOptionsPrimaryColorScheme;
      };
    };
    colors?: BaseColorPallet;
  };
}
