/**
 * @module forms
 */
import type { ButtonElementProps } from "@vueform/vueform";
import type { ButtonProps, InputTextEmits, InputTextProps } from "primevue";
import type { DefineComponent } from "vue";

/**
 * Defines valid properties in FormButton component.
 */
export type Sh3FormButtonProps = ButtonElementProps & ButtonProps;

/**
 * Defines valid properties in InputWithButton component.
 */
export type Sh3InputWithButtonProps = {
  inputProps: InputTextProps;
  buttonProps: ButtonElementProps;
};

declare module "vue" {
  export interface GlobalComponents {
    Sh3InputText: DefineComponent<InputTextProps, {}, InputTextEmits>;
  }
}
