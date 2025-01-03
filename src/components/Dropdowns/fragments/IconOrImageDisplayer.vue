<script setup lang="ts">
import type { HeaderSwitcherOption } from "../Sh3HeaderSwitcher.vue";
import DefaultHeaderIcon from "./DefaultHeaderIcon.vue";

const { item } = defineProps<{
  item: HeaderSwitcherOption;
}>();
</script>

<template>
  <div
    className="flex aspect-square size-8 items-center justify-center rounded-lg border border-surface-100 text-sidebar-primary-foreground"
    :class="{ 'bg-primary-500': !item.img && !item.icon }"
  >
    <component :is="item.icon" v-if="item.icon" class="size-6 shrink-0" />
    <img
      v-if="item.img"
      :src="item.img"
      class="size-6 shrink-0"
      :title="item.label"
    />

    <DefaultHeaderIcon v-if="!item.img && !item.icon" />
  </div>
</template>
