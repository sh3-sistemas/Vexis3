
/**
 * 
 * Sh3DropdownMenu is a Vue component.
 * 
 * [Component](./Sh3DropdownMenu.vue)
 * 
 * @module dropdowns
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3DropdownMenu**
 *
 * _Sh3DropdownMenu is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3DropdownMenu.vue)
 * @group Component
 *
 */
declare class Sh3DropdownMenu extends ClassComponent<any, any, any> { }

/**
 * **SH3 - Sh3SelectDropdown**
 *
 * _Sh3SelectDropdown is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3SelectDropdown.vue)
 * @group Component
 *
 */
declare class Sh3SelectDropdown extends ClassComponent<any, any, any> { }

/**
 * **SH3 - Sh3UserDropdown**
 *
 * _Sh3UserDropdown is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3UserDropdown.vue)
 * @group Component
 *
 */
declare class Sh3UserDropdown extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3DropdownMenu: GlobalComponentConstructor<Sh3DropdownMenu>;
        Sh3SelectDropdown: GlobalComponentConstructor<Sh3SelectDropdown>;
        Sh3UserDropdown: GlobalComponentConstructor<Sh3UserDropdown>;
    }
}