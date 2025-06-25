/**
 * @module popovers
 */
import type { DefineComponent } from "vue";
import type {
  PopoverProps,
  PopoverSlots,
  PopoverEmits,
  Popover,
} from "primevue";

export type PopoverInstanceType = InstanceType<typeof Popover>;
/**
 * Defines valid properties in Popover component.
 */
declare module "vue" {
  export interface GlobalComponents {
    Sh3Popover: DefineComponent<PopoverProps, PopoverSlots, PopoverEmits>;
  }
}
