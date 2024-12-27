<script setup lang="ts">
import Sidebar from "@/components/ui/sidebar/Sidebar.vue";
import SidebarContent from "@/components/ui/sidebar/SidebarContent.vue";
import SidebarGroup from "@/components/ui/sidebar/SidebarGroup.vue";
import SidebarGroupLabel from "@/components/ui/sidebar/SidebarGroupLabel.vue";
import SidebarMenuButton from "@/components/ui/sidebar/SidebarMenuButton.vue";

import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-vue-next";

import Collapsible from "@/components/ui/collapsible/Collapsible.vue";
import CollapsibleTrigger from "@/components/ui/collapsible/CollapsibleTrigger.vue";
import CollapsibleContent from "@/components/ui/collapsible/CollapsibleContent.vue";
import SidebarHeader from "@/components/ui/sidebar/SidebarHeader.vue";
import SidebarFooter from "@/components/ui/sidebar/SidebarFooter.vue";
import SidebarMenuSub from "@/components/ui/sidebar/SidebarMenuSub.vue";
import SidebarMenuSubItem from "@/components/ui/sidebar/SidebarMenuSubItem.vue";
import SidebarMenuSubButton from "@/components/ui/sidebar/SidebarMenuSubButton.vue";
import SidebarMenuItem from "@/components/ui/sidebar/SidebarMenuItem.vue";

// Menu items.
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];
</script>

<template>
  <Sidebar side="left" collapsible="icon">
    <SidebarHeader>header</SidebarHeader>
    <SidebarContent>
      <Collapsible default-open class="group/collapsible">
        <SidebarGroup class="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel as-child> Application </SidebarGroupLabel>
        </SidebarGroup>
        <SidebarMenuItem>
          <CollapsibleTrigger as-child>
            <SidebarMenuButton tooltip="{item.title}">
              <Home />
              Help
              <ChevronDown
                class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem v-for="item in items" :key="item.title">
                <SidebarMenuSubButton as-child>
                  <a :href="item.url">
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarContent>
    <SidebarFooter>footer</SidebarFooter>
  </Sidebar>
</template>
