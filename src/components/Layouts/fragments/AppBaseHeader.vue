<template>
  <div
    class="system-content-general--header w-full h-16 inline-flex justify-between"
  >
    <component :is="content" />
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

export interface AppBaseHeaderProps {
  content: Component;
}

defineProps<AppBaseHeaderProps>();
</script>
