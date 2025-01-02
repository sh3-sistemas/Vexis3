<script setup lang="ts">
import { inject } from "vue";
import { isActive } from "./utils";

import SidebarMenu from "@/components/ui/sidebar/SidebarMenu.vue";
import SidebarMenuButton from "@/components/ui/sidebar/SidebarMenuButton.vue";

import SidebarMenuItem from "@/components/ui/sidebar/SidebarMenuItem.vue";
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";

import CollapsibleMenu from "./CollapsibleMenu.vue";
import SidebarItem from "./SidebarItem.vue";
import { useRoute, useRouter } from "vue-router";
import SidebarDropdownActions from "./SidebarDropdownActions.vue";

const items = inject<TabMenuItem[]>("items");
const route = useRoute();
const router = useRouter();
</script>
<template>
  <SidebarMenu>
    <template v-for="item in items" :key="item.label">
      <!-- <SidebarGroup class="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel as-child> Application </SidebarGroupLabel>
    </SidebarGroup> -->
      <CollapsibleMenu v-if="item.items.length" :item="item" />
      <SidebarMenuItem v-else as-child>
        <SidebarMenuButton
          :tooltip="item.label"
          :is-active="isActive(route, item)"
          @click="router.push({ name: item.key })"
        >
          <SidebarItem :item="item" />
        </SidebarMenuButton>
        <SidebarDropdownActions :item="item" />
      </SidebarMenuItem>
    </template>
  </SidebarMenu>
</template>
