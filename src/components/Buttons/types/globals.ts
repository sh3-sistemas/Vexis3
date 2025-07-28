import type { DefineComponent } from "vue";

import type {
  ButtonProps,
  ButtonSlots,
  ButtonEmits,
  ToggleSwitchProps,
} from "primevue";
import type { Sh3IconButtonProps, Sh3PanelButtonProps } from ".";

declare module "vue" {
  export interface GlobalComponents {
    Sh3Button: DefineComponent<ButtonProps, ButtonSlots, ButtonEmits>;
    Sh3IconButton: DefineComponent<Sh3IconButtonProps, any, any>;
    Sh3PanelButton: DefineComponent<Sh3PanelButtonProps, any, any>;
    Sh3ToggleSwitch: DefineComponent<ToggleSwitchProps>;
  }
}
