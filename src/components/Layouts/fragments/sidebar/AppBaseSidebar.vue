<script setup lang="ts">
import SidebarProvider from "@/components/ui/sidebar/SidebarProvider.vue";
import SidebarTrigger from "@/components/ui/sidebar/SidebarTrigger.vue";
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import AppSidebar from "./AppSidebar.vue";
import { ref, computed, provide } from "vue";

const sidebarState = ref(true);
const defaultOpen = computed(() => sidebarState.value);

export type AppSidebarProps = {
  items: Array<TabMenuItem>;
};

const { items } = defineProps<AppSidebarProps>();
provide("items", items);
</script>

<template>
  <SidebarProvider :default-open="defaultOpen">
    <AppSidebar />
    <main
      class="relative flex min-h-svh flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow h-full peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4)-var(--header-height))]"
    >
      <SidebarTrigger />
      <slot></slot>
    </main>
  </SidebarProvider>
</template>
