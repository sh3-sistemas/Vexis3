<script setup lang="ts">
import Panel from "primevue/panel";
import { useSlots } from "vue";

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <Panel :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <slot></slot>
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </Panel>
</template>
