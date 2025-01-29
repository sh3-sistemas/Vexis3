<script setup lang="ts">
import Sh3Divider from "@/components/Typography/Sh3Divider.vue";

withDefaults(defineProps<{ divider: boolean }>(), {
  divider: true,
});
</script>

<template>
  <div class="flex gap-x-3">
    <Sh3Divider v-if="divider" layout="vertical" />
    <slot></slot>
  </div>
</template>
