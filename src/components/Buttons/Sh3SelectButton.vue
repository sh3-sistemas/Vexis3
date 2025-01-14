<template>
  <SelectButton :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </SelectButton>
</template>

<script lang="ts" setup>
import { useSlots } from "vue";
import SelectButton from "primevue/selectbutton";

defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;
</script>
