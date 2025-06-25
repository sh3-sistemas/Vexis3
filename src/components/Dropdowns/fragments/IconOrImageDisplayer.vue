<script setup lang="ts">
import type { HeaderSwitcherOption } from "../Sh3HeaderSwitcher.vue";
import DefaultHeaderIcon from "./DefaultHeaderIcon.vue";

const { item } = defineProps<{
  item?: HeaderSwitcherOption;
}>();
</script>

<template>
  <div
    :class="[
      'flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground',
      !item?.img && !item?.icon ? 'bg-primary-500' : '',
    ]"
  >
    <component :is="item?.icon" v-if="item?.icon" class="size-6 shrink-0" />
    <img
      v-if="item?.img"
      :src="item?.img"
      class="size-6 shrink-0"
      :title="item?.label"
    />

    <DefaultHeaderIcon v-if="!item?.img && !item?.icon" />
  </div>
</template>
