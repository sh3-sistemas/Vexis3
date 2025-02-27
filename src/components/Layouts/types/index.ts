/**
 *
 * Sh3LayoutMock is a Vue component.
 *
 * [Component](./Sh3LayoutMock.vue)
 *
 * @module layouts
 *
 */
import type { DefineComponent } from "vue";
import type { Sh3UserNavBarProps } from "@/components/Navigation";
import type { Sh3RouterLinkTabsProps } from "@/types";
import type { AppBaseHeaderProps } from "../fragments/AppBaseHeader.vue";
import type { AppBaseToolbarProps } from "../fragments/AppBaseToolbar.vue";
import type { AppSidebarProps } from "../fragments/sidebar/AppBaseSidebar.vue";
/**
 * **SH3 - Sh3LayoutMock**
 *
 * _Sh3LayoutMock is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3LayoutMock.vue)
 * @group Component
 *
 */

/**
 * **SH3 - Sh3PageNotFound**
 *
 * _Sh3PageNotFound is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3PageNotFound.vue)
 * @group Component
 *
 */

/**
 * **SH3 - Sh3Vertical**
 *
 * _Sh3Vertical is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Vertical.vue)
 * @group Component
 *
 */

/**
 * **SH3 - Sh3Vertical**
 *
 * _Sh3Vertical is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Vertical.vue)
 * @group Component
 *
 */

export type AppBaseLayoutProps = {
  navbar: Sh3UserNavBarProps;
  side: AppSidebarProps;
  toolbar: AppBaseToolbarProps & { hidden: boolean };
  header?: AppBaseHeaderProps;
  tabs: Sh3RouterLinkTabsProps;
};

declare module "vue" {
  export interface GlobalComponents {
    Sh3Vertical: DefineComponent<any, any, any>;
    Sh3LayoutMock: DefineComponent<any, any, any>;
    Sh3PageNotFound: DefineComponent<any, any, any>;
    Sh3AppBaseLayout: DefineComponent<AppBaseLayoutProps, any, any>;
  }
}
