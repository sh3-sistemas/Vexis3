<script setup lang="ts">
import Sidebar from "@/components/ui/sidebar/Sidebar.vue";
import SidebarHeader from "@/components/ui/sidebar/SidebarHeader.vue";
import SidebarContent from "@/components/ui/sidebar/SidebarContent.vue";
import SidebarRoutesMenu from "./content/SidebarRoutesMenu.vue";
import SidebarFooter from "@/components/ui/sidebar/SidebarFooter.vue";
</script>

<template>
  <Sidebar side="left" collapsible="icon">
    <SidebarHeader>
      <slot name="header"></slot>
    </SidebarHeader>
    <SidebarContent>
      <SidebarRoutesMenu />
    </SidebarContent>
    <SidebarFooter>
      <slot name="footer"></slot>
    </SidebarFooter>
  </Sidebar>
</template>
