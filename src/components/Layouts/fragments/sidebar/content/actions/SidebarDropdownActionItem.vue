<script setup lang="ts">
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import type { DropdownAction } from "./types";
import { inject } from "vue";

defineProps<{ action: DropdownAction }>();
const item = inject<TabMenuItem>("item") as TabMenuItem;
</script>

<template>
  <DropdownMenuItem :key="action.label" @click="action.action(item)">
    <component :is="action.icon" />
    <DropdownMenuLabel>
      {{ action.label }}
    </DropdownMenuLabel>
  </DropdownMenuItem>
</template>
