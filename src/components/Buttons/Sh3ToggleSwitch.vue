<script setup lang="ts">
import ToggleSwitch from "primevue/toggleswitch";
import { useSlots } from "vue";

const slots = useSlots();
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <ToggleSwitch :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </ToggleSwitch>
</template>
