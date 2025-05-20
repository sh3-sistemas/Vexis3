<template>
    <FloatLabel :pt-options="{ mergeProps: true }" v-bind="$attrs">
      <slot></slot>
    </FloatLabel>
  </template>
  
  <script lang="ts" setup>
  import FloatLabel from "primevue/floatlabel";
  
  defineOptions({
    inheritAttrs: false,
  });
  
  </script>
  