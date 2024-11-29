/**
 *
 * Sh3ResponsiveModal is a Vue component.
 *
 * [Component](./Sh3ResponsiveModal.vue)
 *
 * @module modals
 *
 */
import type { DefineComponent } from "vue";
import type { DialogEmits, DialogProps, DialogSlots } from "primevue/dialog";
/**
 * **SH3 - Sh3ResponsiveModal**
 *
 * _Sh3ResponsiveModal is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3ResponsiveModal.vue)
 * @group Component
 *
 */

declare module "vue" {
  export interface GlobalComponents {
    Sh3ResponsiveModal: DefineComponent<DialogProps, DialogSlots, DialogEmits>;
  }
}
