/**
 * @module forms
 */
import type { ButtonElementProps } from "@vueform/vueform";
import type {
  ButtonProps,
  InputNumberEmits,
  InputNumberProps,
  InputTextEmits,
  InputTextProps,
} from "primevue";
import type { DefineComponent } from "vue";

/**
 * Defines valid properties in FormButton component.
 */
export type Sh3FormButtonProps = ButtonElementProps & ButtonProps;

/**
 * Defines valid properties in InputWithButton component.
 */
export type Sh3InputWithButtonProps = {
  inputProps: InputNumberProps;
  buttonProps: ButtonElementProps;
};

declare module "vue" {
  export interface GlobalComponents {
    Sh3InputNumber: DefineComponent<InputNumberProps, {}, InputNumberEmits>;
    Sh3InputText: DefineComponent<InputTextProps, {}, InputTextEmits>;
  }
}
