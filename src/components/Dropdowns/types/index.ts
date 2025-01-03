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

declare module "vue" {
  export interface GlobalComponents {
    Sh3DropdownMenu: DefineComponent<any, any, any>;
    Sh3SelectDropdown: DefineComponent<any, any, any>;
    Sh3UserDropdown: DefineComponent<any, any, any>;
  }
}
