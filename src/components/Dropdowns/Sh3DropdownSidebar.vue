<script setup lang="ts">
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import type { Sh3DropdownSidebarProps } from "./types";
import { ref, computed } from "vue";

const { isMobile, open } = useSidebar();
const toggleState = ref(false);
const menuItemClass = computed(() =>
  open.value
    ? "border rounded-md grid grid-cols-6 p-2 items-center"
    : "border rounded-md",
);

defineProps<Sh3DropdownSidebarProps>();
defineExpose({ toggleState });
</script>

<template>
  <SidebarMenu>
    <span v-if="open && title" class="font-bold text-base">{{ title }}</span>
    <SidebarMenuItem :class="menuItemClass">
      <div v-if="open && $slots.outerContent" class="col-span-5">
        <slot name="outerContent" />
      </div>
      <DropdownMenu v-model:open="toggleState">
        <DropdownMenuTrigger class="size-full">
          <div v-if="!open && $slots.closedTrigger">
            <slot name="closedTrigger" />
          </div>
          <div v-else-if="$slots.trigger">
            <slot name="trigger" />
          </div>
          <SidebarMenuButton
            v-else
            class="data-[state=open]:bg-white-accent data-[state=open]:text-sidebar-accent-foreground pi pi-chevron-right justify-center"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          class="w-[--radix-dropdown-menu-trigger-width] min-w-56 mb-2 p-4 gap-4 rounded-lg flex flex-col"
          :side="isMobile ? 'bottom' : 'right'"
          :side-offset="20"
        >
          <slot name="content" />
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
