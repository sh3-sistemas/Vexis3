<script setup lang="ts">
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import Collapsible from "@/components/ui/collapsible/Collapsible.vue";
import CollapsibleTrigger from "@/components/ui/collapsible/CollapsibleTrigger.vue";
import CollapsibleContent from "@/components/ui/collapsible/CollapsibleContent.vue";

import SidebarMenuSub from "@/components/ui/sidebar/SidebarMenuSub.vue";
import SidebarMenuButton from "@/components/ui/sidebar/SidebarMenuButton.vue";
import SidebarMenuSubButton from "@/components/ui/sidebar/SidebarMenuSubButton.vue";
import SidebarMenuSubItem from "@/components/ui/sidebar/SidebarMenuSubItem.vue";
import SidebarMenuItem from "@/components/ui/sidebar/SidebarMenuItem.vue";
import SidebarItem from "./SidebarItem.vue";

import SidebarDropdownActions from "./actions/SidebarDropdownActions.vue";

import { ChevronDown } from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";

import { isActive } from "./utils";
import { ref } from "vue";
import type {
  DropdownActionsInstance,
  DropdownActionsRefs,
} from "./actions/types";

const { item } = defineProps<{ item: TabMenuItem }>();

const route = useRoute();
const router = useRouter();

const menuDropdown = ref<DropdownActionsRefs>({});
const openDropdownRef = (key: string) => {
  const contextmenu = menuDropdown.value ? menuDropdown.value[key] : null;
  if (contextmenu) (contextmenu as DropdownActionsInstance).openDropdown();
};
</script>

<template>
  <Collapsible class="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger as-child>
        <SidebarMenuButton
          :tooltip="item.label"
          :is-active="isActive(route, item)"
        >
          <SidebarItem :item="item" />
          <ChevronDown
            class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-mercury-500"
          />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem v-for="child in item.items" :key="child.label">
            <template v-if="child.items.length == 0">
              <SidebarMenuSubButton
                :tooltip="child.label"
                :is-active="isActive(route, child)"
                @click="router.push({ name: child.key })"
                @contextmenu.prevent="openDropdownRef(child.key)"
              >
                <SidebarItem :item="child" />
                <SidebarDropdownActions
                  :ref="(el) => (menuDropdown[child.key] = el)"
                  :item="child"
                />
              </SidebarMenuSubButton>
            </template>
            <CollapsibleMenu v-else :item="child" />
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</template>
