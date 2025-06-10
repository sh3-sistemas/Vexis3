/**
 * @module menus
 */
import type { DefineComponent } from "vue";
import type {
  TieredMenuProps,
  TieredMenuSlots,
  TieredMenuEmits,
  TieredMenu,
} from "primevue";

export type TieredMenuInstanceType = InstanceType<typeof TieredMenu>;
declare module "vue" {
  export interface GlobalComponents {
    Sh3TieredMenu: DefineComponent<
      TieredMenuProps,
      TieredMenuSlots,
      TieredMenuEmits
    >;
  }
}
