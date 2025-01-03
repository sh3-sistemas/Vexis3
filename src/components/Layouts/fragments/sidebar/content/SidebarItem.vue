<script setup lang="ts">
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";

defineProps<{ item: TabMenuItem }>();
</script>

<template>
  <component :is="item.icon" v-if="item.icon" class="w-10 h-auto" />
  <span>{{ item.label }}</span>
</template>
