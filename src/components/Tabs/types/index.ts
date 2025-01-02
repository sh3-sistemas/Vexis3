/**
 *
 * Sh3RouterLinkTabs is a Vue component.
 *
 * [Component](./Sh3RouterLinkTabs.vue)
 *
 * @module tabs
 *
 */
import type { DefineComponent } from "vue";
/**
 * **SH3 - Sh3RouterLinkTabs**
 *
 * _Sh3RouterLinkTabs is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3RouterLinkTabs.vue)
 * @group Component
 *
 */

type RouterTab = {
  name: string;
  label: string;
};

export interface Sh3RouterLinkTabsProps {
  tabGroup: Array<RouterTab>;
  disabled: boolean;
}

/**
 * Defines valid emits in Dialog component.
 */
export interface Sh3RouterLinkTabsEmits {
  /**
   * Callback to invoke when the value changes.
   */
  changeRoute(): string;
}

declare module "vue" {
  export interface GlobalComponents {
    Sh3RouterLinkTabs: DefineComponent<
      Sh3RouterLinkTabsProps,
      any,
      Sh3RouterLinkTabsEmits
    >;
  }
}
