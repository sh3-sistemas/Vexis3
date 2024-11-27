/**
 * @module buttons
 */
import type { OverlayPanelProps } from "primevue/overlaypanel";
import type { IconProps } from "@/types";

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
