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

/**
 * **SH3 - Sh3Tabs**
 *
 * _Sh3Tabs is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Tabs.vue)
 * @group Component
 *
 */
type component = {
  component: object;
  props: object;
};

type Tab = {
  title: string;
  titleComponent?: component;
  content?: component;
};

export interface Sh3TabsProps {
  tabs: Array<Tab>;
  disabled: boolean;
}

declare module "vue" {
  export interface GlobalComponents {
    Sh3RouterLinkTabs: DefineComponent<
      Sh3RouterLinkTabsProps,
      any,
      Sh3RouterLinkTabsEmits
    >;
    Sh3Tabs: DefineComponent<Sh3TabsProps, any, any>;
  }
}
