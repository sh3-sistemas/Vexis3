<script setup lang="ts">
import Select, { type SelectSlots } from "primevue/select";
import { useSlots } from "vue";
const slots = useSlots() as unknown as SelectSlots;

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <Select :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <template v-for="(_, slot) in slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </Select>
</template>
