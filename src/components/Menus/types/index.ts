/**
 * @module menus
 */
import type { DefineComponent } from "vue";
import type {
  TieredMenuProps,
  TieredMenuSlots,
  TieredMenuEmits,
} from "primevue";

declare module "vue" {
  export interface GlobalComponents {
    Sh3TieredMenu: DefineComponent<
      TieredMenuProps,
      TieredMenuSlots,
      TieredMenuEmits
    >;
  }
}
