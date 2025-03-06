<script setup lang="ts">
import MultiSelect, { type MultiSelectSlots } from "primevue/multiselect";
import { useSlots } from "vue";
const slots = useSlots() as unknown as MultiSelectSlots;

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <MultiSelect :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <template v-for="(_, slot) in slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </MultiSelect>
</template>
