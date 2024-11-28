/**
 *
 * Sh3DropdownMenu is a Vue component.
 *
 * [Component](./Sh3DropdownMenu.vue)
 *
 * @module dropdowns
 *
 */
import type { DefineComponent } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    Sh3DropdownMenu: DefineComponent<any, any, any>;
    Sh3SelectDropdown: DefineComponent<any, any, any>;
    Sh3UserDropdown: DefineComponent<any, any, any>;
  }
}
