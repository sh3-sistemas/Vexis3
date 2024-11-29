<template>
  <div
    class="system-content--toolbar w-full h-20 py-4 px-6 inline-flex justify-between items-center gap-6 rounded-xl bg-white"
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
