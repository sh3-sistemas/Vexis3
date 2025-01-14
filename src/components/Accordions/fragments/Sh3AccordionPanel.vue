<script setup lang="ts">
import { useSlots } from "vue";
import { AccordionPanel } from "primevue";

defineOptions({
  inheritAttrs: false,
});

defineProps<{ value: number | string }>();

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;
</script>

<template>
  <AccordionPanel v-bind="$attrs" :value="value">
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </AccordionPanel>
</template>
