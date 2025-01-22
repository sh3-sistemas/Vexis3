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
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import YearSlide from "./fragments/YearSlide.vue";

import type { Sh3DropdownSidebarProps } from "./types";

const emits = defineEmits(["changeYear"]);

const { isMobile, open } = useSidebar();

defineProps<Sh3DropdownSidebarProps>();
</script>

<template>
  <SidebarMenu>
    <h4 v-if="open && title">{{ title }}:</h4>
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
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            :class="
              'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground pi pi-sync ' +
              (open ? 'justify-end' : 'justify-center')
            "
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          class="w-[--radix-dropdown-menu-trigger-width] min-w-56 p-4 gap-4 rounded-lg flex flex-col"
          :side="isMobile ? 'bottom' : 'right'"
          :side-offset="28"
        >
          <p v-if="title" class="text-xs">{{ title }}</p>
          <YearSlide
            v-if="yearSlide"
            :range="20"
            @change-year="(value: number) => emits('changeYear', value)"
          />

          <slot name="content" />

          <div v-if="$slots.item" class="flex justify-center">
            <DropdownMenuItem class="p-0">
              <slot name="item" />
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
