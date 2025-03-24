<script setup lang="ts">
import { useSlots } from "vue";
import AccordionHeader from "primevue/accordionheader";

defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;
</script>

<template>
  <AccordionHeader v-bind="$attrs">
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </AccordionHeader>
</template>
