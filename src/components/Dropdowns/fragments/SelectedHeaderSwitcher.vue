<script setup lang="ts">
import SidebarMenuButton from "@/components/ui/sidebar/SidebarMenuButton.vue";
import type { HeaderSwitcherOption } from "../Sh3HeaderSwitcher.vue";
import { ChevronsUpDown } from "lucide-vue-next";
import IconOrImageDisplayer from "./IconOrImageDisplayer.vue";

const { chevron = true } = defineProps<{
  chevron: boolean;
  title: string;
  subtitle: string;
}>();

const selected = defineModel<HeaderSwitcherOption>();
</script>

<template>
  <SidebarMenuButton
    size="lg"
    class="data-[state=open]:bg-white-accent data-[state=open]:text-sidebar-accent-foreground"
  >
    <IconOrImageDisplayer :item="selected" />
    <div class="grid flex-1 text-left text-sm leading-tight">
      <span class="truncate font-semibold">
        {{ title }}
      </span>
      <span class="truncate text-xs">{{ subtitle }}</span>
    </div>
    <ChevronsUpDown v-show="chevron" class="ml-auto" />
  </SidebarMenuButton>
</template>
