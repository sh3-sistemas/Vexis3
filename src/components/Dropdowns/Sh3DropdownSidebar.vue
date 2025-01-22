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
import { ref } from "vue";

const { isMobile, open } = useSidebar();
const toggleState = ref(false);

defineProps<Sh3DropdownSidebarProps>();
defineExpose({ toggleState });
</script>

<template>
  <SidebarMenu>
    <span v-if="open && title" class="font-bold text-base">{{ title }}</span>
    <SidebarMenuItem
      :class="
        open
          ? 'border rounded-lg grid grid-cols-6 p-2 items-center'
          : 'border rounded-lg'
      "
    >
      <div v-if="open && $slots.outerContent" class="col-span-5">
        <slot name="outerContent" />
      </div>
      <DropdownMenu v-model:open="toggleState">
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground pi pi-sync justify-center"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          class="w-[--radix-dropdown-menu-trigger-width] min-w-56 p-4 gap-4 rounded-lg flex flex-col"
          :side="isMobile ? 'bottom' : 'right'"
          :side-offset="28"
        >
          <slot name="content" />
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
