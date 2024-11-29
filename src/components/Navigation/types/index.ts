/**
 *
 * Sh3UserNavbar is a Vue component.
 *
 * [Component](./Sh3UserNavbar.vue)
 *
 * @module navigation
 *
 */
import type { DefineComponent } from "vue";
import type { VNode } from "vue";

export type Styling = {
  root: string;
  container: string;
  logo: {
    container: string;
    label: string;
  };
  content: string;
  hamburger: string;
  dropdown: {
    button: string;
    dropdown: string;
    avatar: {
      root: string;
      image: string;
      fallback: string;
    };
    links: {
      root: string;
      icon: string;
      route: string;
    };
  };
};

export type ButtonNavigation = {
  icon: string;
  label: string;
  route: string;
};

export interface NavParams {
  logo: {
    route: string;
    label: string;
    labelStyle: string;
  };
  profile: {
    photo: string;
    name: string;
  };
}

export type UserDropdownLink = {
  label: string;
  link: string;
  icon?: string;
};

export interface Sh3UserNavBarProps {
  id: string;
  params: NavParams;
  userLinks: UserDropdownLink[];
  styling: Styling;
}

export interface Sh3UserNavBarSlots {
  /**
   * Default content slot.
   */
  logo(): VNode[];
  /**
   * Custom header template.
   */
  extra(): VNode[];
  /**
   * Custom footer template.
   */
  navlinks(): VNode[];
}

/**
 * **SH3 - Sh3UserNavbar**
 *
 * _Sh3UserNavbar is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3UserNavbar.vue)
 * @group Component
 *
 */

declare module "vue" {
  export interface GlobalComponents {
    Sh3UserNavbar: DefineComponent<Sh3UserNavBarProps, Sh3UserNavBarSlots, any>;
  }
}
