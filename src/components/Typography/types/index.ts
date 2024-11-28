import type { DefineComponent } from "vue";
import type {
  DividerProps,
  DividerSlots,
  DividerEmits,
  MessageProps,
  MessageSlots,
  MessageEmits,
} from "primevue";

declare module "vue" {
  export interface GlobalComponents {
    Sh3Divider: DefineComponent<DividerProps, DividerSlots, DividerEmits>;
    Sh3Message: DefineComponent<MessageProps, MessageSlots, MessageEmits>;
  }
}
