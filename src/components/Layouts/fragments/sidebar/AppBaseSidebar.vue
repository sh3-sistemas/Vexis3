<script setup lang="ts">
import SidebarProvider from "@/components/ui/sidebar/SidebarProvider.vue";
import SidebarTrigger from "@/components/ui/sidebar/SidebarTrigger.vue";
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import AppSidebar from "./AppSidebar.vue";
import { ref, computed, provide } from "vue";
import { getCookie } from "./content/utils";

const sidebarState = ref(getCookie("sidebar:state"));
const defaultOpen = computed(() => sidebarState.value === "true");

export type AppSidebarProps = {
  items: Array<TabMenuItem>;
};

const { items } = defineProps<AppSidebarProps>();
provide("items", items);
</script>

<template>
  <SidebarProvider :default-open="defaultOpen">
    <AppSidebar>
      <template #header>
        <slot name="side-header"></slot>
      </template>

      <template #footer>
        <slot name="side-footer"></slot>
      </template>
    </AppSidebar>
    <main
      class="relative flex min-h-svh flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow overflow-auto gap-2 bg-surface-100 p-4"
    >
      <SidebarTrigger />
      <slot name="content"></slot>
    </main>
  </SidebarProvider>
</template>
