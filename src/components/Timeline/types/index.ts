import type { DefineComponent } from "vue";
import {
  Timeline,
  type TimelineEmits,
  type TimelineProps,
  type TimelineSlots,
} from "primevue";

export { Timeline };

/**
 * **PrimeVue - Timeline**
 *
 * _Timeline visualizes a series of chained events._
 *
 * [Live Demo](https://www.primevue.org/timeline/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */

declare module "vue" {
  export interface GlobalComponents {
    Sh3Timeline: DefineComponent<TimelineProps, TimelineSlots, TimelineEmits>;
  }
}
