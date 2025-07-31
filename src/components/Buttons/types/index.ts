/**
 * @module buttons
 */
import type { OverlayPanelProps } from "primevue/overlaypanel";
import type { IconProps } from "@/types";
import type { DefineComponent } from "vue";
import type { ButtonProps, ButtonSlots, ButtonEmits } from "primevue";

export * from "./globals";

/**
 * Defines valid properties in IconButton component.
 */
export type Sh3IconButtonProps = {
  icon: IconProps;
};

/**
 * Defines valid properties in PanelButton component.
 */
export type Sh3PanelButtonProps = {
  buttonProps: Sh3IconButtonProps;
  panelProps: OverlayPanelProps;
};

declare module "vue" {
  export interface GlobalComponents {
    Sh3Button: DefineComponent<ButtonProps, ButtonSlots, ButtonEmits>;
  }
}
