import type { ButtonProps, ButtonSlots, ButtonEmits } from "primevue";
import type { DefineComponent } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    Sh3Button: DefineComponent<ButtonProps, ButtonSlots, ButtonEmits>;
  }
}
