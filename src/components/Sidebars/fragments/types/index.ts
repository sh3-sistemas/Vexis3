import type { RouteRecordName } from "vue-router";

type ConfigData = {
  parent?: RouteRecordName;
  activeStyle: string;
};

export type MenuConfigData = {
  root: ConfigData;
  tabSubmenu: ConfigData;
  submenu: ConfigData;
};

export type Category = keyof MenuConfigData;

export type SidebarRoot = {
  rootActiveStyle: string;
  rootIconActiveStyle: string;
};

export type SidebarItemMenuActive = string | SidebarRoot;

export type TabMenuItem = {
  key: string;
  label: string;
  parent?: string;
  path?: string;
  icon?: string | object;
  items: TabMenuItem[];
  command?: () => void;
  route?: RouteRecordName;
};

export type TabMenuProps = {
  items: TabMenuItem[];
};
