<script setup lang="ts">
import Timeline from "primevue/timeline";
import { useSlots } from "vue";

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <Timeline :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <slot></slot>
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </Timeline>
</template>
