/**
 *
 * Sh3ToggleSidebar is a Vue component.
 *
 * [Component](./Sh3ToggleSidebar.vue)
 *
 * @module sidebars
 *
 */
import type { DefineComponent } from "vue";
import type { VNode } from "vue";
/**
 * **SH3 - Sh3ToggleSidebar**
 *
 * _Sh3ToggleSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3ToggleSidebar.vue)
 * @group Component
 *
 */

/**
 * **SH3 - ToggleBigSidebar**
 *
 * _ToggleBigSidebar is a Vue component._
 * --- ---
 * [Vue Based Component](./ToggleBigSidebar.vue)
 * @group Component
 *
 */
export type ToggleIcon = {
  src: string;
  title: string;
};

export type ToggleSidebarStyle = {
  container: string;
  header: string;
  body: string;
  footer: string;
};

export type Sh3ToggleSidebarProps = {
  title: string;
  icon: ToggleIcon;
  styling?: ToggleSidebarStyle;
};

export interface Sh3ToggleSidebarSlots {
  /**
   * Default header slot.
   */
  "header-extra-content"(): VNode[];
  /**
   * Custom close icon template.
   * @param {Object} scope - close icon slot's params.
   */
  "body-content"(scope: {
    /**
     * Style class of the close icon
     */
    sidebar: any;
  }): VNode[];
  /**
   * Default footer slot.
   */
  "footer-content"(): VNode[];
}

/**
 * Defines valid emits in Dialog component.
 */
export interface Sh3ToggleSidebarEmits {
  /**
   * Callback to invoke when sidebar is closed.
   */
  onClose(): void;
  /**
   * Callback to invoke when sidebar is open.
   */
  onOpen(): void;
}

declare module "vue" {
  export interface GlobalComponents {
    Sh3ToggleSidebar: DefineComponent<
      Sh3ToggleSidebarProps,
      Sh3ToggleSidebarSlots,
      Sh3ToggleSidebarEmits
    >;
  }
}
