import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import type { CustomIcon } from "@/types";
import type SidebarDropdownActions from "../SidebarDropdownActions.vue";
import type { ComponentPublicInstance } from "vue";

export type DropdownAction = {
  label: string;
  icon: CustomIcon | string;
  action: (item: TabMenuItem) => void;
};

export type DropdownActionsInstance = InstanceType<
  typeof SidebarDropdownActions
>;

export type DropdownActionsRefs = Record<
  string,
  Element | ComponentPublicInstance | DropdownActionsInstance | null
>;
