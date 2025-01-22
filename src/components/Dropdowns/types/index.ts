/**
 *
 * Sh3DropdownMenu is a Vue component.
 *
 * [Component](./Sh3DropdownMenu.vue)
 *
 * @module dropdowns
 *
 */
import type { DefineComponent, VNode } from "vue";

export interface Sh3HeaderSwitcher {
  /**
   * Default header slot.
   */
  "header"(): VNode[];
  /**
   * Default footer slot.
   */
  "footer"(): VNode[];
}

/**
 * **SH3 - Sh3DropdownSidebar**
 *
 * _Sh3DropdownSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3DropdownSidebar.vue)
 * @group Component
 *
 */

export type Competencia = {
  mes: string;
  estado: string;
};

export interface Sh3DropdownSidebarProps {
  title?: string;
  value?: Competencia;
}

/**
 * Defines valid slots in Sh3DropdownSidebar component.
 */
export interface Sh3DropdownSidebarSlots {
  /**
   * Default outerContent slot.
   */
  "outerContent"(): VNode[];
  /**
   * Default content slot.
   */
  "content"(): VNode[];
  /**
   * Default item slot.
   */
  "item"(): VNode[];
}

/**
 * Defines valid emits in Sh3DropdownSidebar component.
 */
export interface Sh3DropdownSidebarEmits {
  /**
   * Callback to invoke when the value changes.
   */
  changeYear(): number;
}
declare module "vue" {
  export interface GlobalComponents {
    Sh3DropdownMenu: DefineComponent<any, any, any>;
    Sh3SelectDropdown: DefineComponent<any, any, any>;
    Sh3UserDropdown: DefineComponent<any, any, any>;
    Sh3DropdownSidebar: DefineComponent<
      Sh3DropdownSidebarProps,
      Sh3DropdownSidebarSlots,
      Sh3DropdownSidebarEmits
    >;
  }
}
