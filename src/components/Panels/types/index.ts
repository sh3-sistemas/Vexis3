import type { PanelProps, PanelSlots, PanelEmits } from "primevue";
import type { DefineComponent } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    Sh3Panel: DefineComponent<PanelProps, PanelSlots, PanelEmits>;
  }
}
