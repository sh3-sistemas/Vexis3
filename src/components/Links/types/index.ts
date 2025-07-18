/**
 *
 * Sh3Breadcrumb is a Vue component.
 *
 * [Component](./Sh3Breadcrumb.vue)
 *
 * @module links
 *
 */
import type {
  BreadcrumbEmits,
  BreadcrumbProps,
  BreadcrumbSlots,
} from "primevue";
import type { DefineComponent } from "vue";
/**
 * **SH3 - Sh3Breadcrumb**
 *
 * _Sh3Breadcrumb is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Breadcrumb.vue)
 * @group Component
 *
 */

/**
 * **SH3 - Sh3MiniLink**
 *
 * _Sh3MiniLink is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3MiniLink.vue)
 * @group Component
 *
 */

declare module "vue" {
  export interface GlobalComponents {
    Sh3Breadcrumb: DefineComponent<
      BreadcrumbProps,
      BreadcrumbSlots,
      BreadcrumbEmits
    >;
    Sh3MiniLink: DefineComponent<any, any, any>;
  }
}
