<template>
  <div
    class="system-content--toolbar w-full md:h-20 md:max-h-20 md:min-h-20 py-4 px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6 rounded-xl bg-white"
  >
    <slot name="left"></slot>
    <div class="system-content-toolbar--content grow">
      <component :is="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component, VNode } from "vue";

export interface AppBaseToolbarProps {
  content?: Component;
}

export interface AppBaseToolbarSlots {
  left(): VNode[];
}

defineProps<AppBaseToolbarProps>();
</script>
