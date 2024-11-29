/**
 *
 * [Primevue Based](https://v3.primevue.org/tag)
 * @module tags
 *
 */

import type { DefineComponent } from "vue";
import type { TagEmits, TagProps, TagSlots } from "primevue/tag";

/**
 * **SH3 - Sh3Tag**
 *
 * _Tag is an extension to standard tag element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

declare module "vue" {
  export interface GlobalComponents {
    Sh3Tag: DefineComponent<TagProps, TagSlots, TagEmits>;
  }
}
