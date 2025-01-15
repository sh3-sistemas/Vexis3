<template>
  <Tag :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <slot></slot>
  </Tag>
</template>

<script lang="ts" setup>
import Tag from "primevue/tag";

defineOptions({
  inheritAttrs: false,
});
</script>
