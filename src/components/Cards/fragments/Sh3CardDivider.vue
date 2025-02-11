<script setup lang="ts">
import Sh3Divider from "@/components/Typography/Sh3Divider.vue";
import { type Sh3CardDividerProps } from "../types";

withDefaults(defineProps<Sh3CardDividerProps>(), {
  divider: true,
});
</script>

<template>
  <div class="flex flex-row lg:flex-col xl:flex-row gap-3">
    <Sh3Divider v-if="divider" layout="vertical" class="hidden xl:block" />
    <slot></slot>
  </div>
</template>
