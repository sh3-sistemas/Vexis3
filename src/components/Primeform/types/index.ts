import type { DefineComponent } from "vue";
import type {
  FloatLabelEmits,
  FloatLabelProps,
  FloatLabelSlots,
  InputTextEmits,
  InputTextProps,
  InputTextSlots,
  PasswordEmits,
  PasswordProps,
  PasswordSlots,
} from "primevue";

declare module "vue" {
  export interface GlobalComponents {
    Sh3Password: DefineComponent<PasswordProps, PasswordSlots, PasswordEmits>;
    Sh3InputText: DefineComponent<
      InputTextProps,
      InputTextSlots,
      InputTextEmits
    >;
    Sh3FloatLabel: DefineComponent<
      FloatLabelProps,
      FloatLabelSlots,
      FloatLabelEmits
    >;
  }
}
