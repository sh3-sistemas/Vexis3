<template>
  <Tag :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <slot></slot>
  </Tag>
</template>

<script lang="ts" setup>
import Tag from "primevue/tag";
import { useSlots } from "vue";

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});
</script>
