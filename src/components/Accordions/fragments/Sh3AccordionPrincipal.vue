<script setup lang="ts">
import { useSlots } from "vue";
import Accordion from "primevue/accordion";

defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;
</script>

<template>
  <Accordion v-bind="$attrs">
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </Accordion>
</template>
