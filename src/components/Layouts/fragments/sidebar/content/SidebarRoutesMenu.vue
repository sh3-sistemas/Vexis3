<script setup lang="ts">
import { inject, ref } from "vue";
import { isActive } from "./utils";

import SidebarMenu from "@/components/ui/sidebar/SidebarMenu.vue";
import SidebarMenuButton from "@/components/ui/sidebar/SidebarMenuButton.vue";

import SidebarMenuItem from "@/components/ui/sidebar/SidebarMenuItem.vue";
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";

import CollapsibleMenu from "./CollapsibleMenu.vue";
import SidebarItem from "./SidebarItem.vue";
import { useRoute, useRouter } from "vue-router";
import SidebarDropdownActions from "./actions/SidebarDropdownActions.vue";
import type {
  DropdownActionsInstance,
  DropdownActionsRefs,
} from "./actions/types";

const items = inject<TabMenuItem[]>("items");
const route = useRoute();
const router = useRouter();

const menuDropdown = ref<DropdownActionsRefs>({});
const openDropdownRef = (key: string) => {
  const contextmenu = menuDropdown.value ? menuDropdown.value[key] : null;
  if (contextmenu) (contextmenu as DropdownActionsInstance).openDropdown();
};
</script>
<template>
  <SidebarMenu class="p-2">
    <template v-for="item in items" :key="item.label">
      <CollapsibleMenu v-if="item.items.length" :item="item" />
      <SidebarMenuItem v-else as-child>
        <SidebarMenuButton
          :tooltip="item.label"
          :is-active="isActive(route, item)"
          @click="router.push({ name: item.key })"
          @contextmenu.prevent="openDropdownRef(item.key)"
        >
          <SidebarItem :item="item" />
        </SidebarMenuButton>
        <SidebarDropdownActions
          :ref="(el) => (menuDropdown[item.key] = el)"
          :item="item"
        />
      </SidebarMenuItem>
    </template>
  </SidebarMenu>
</template>
