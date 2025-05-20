<template>
    <Password :pt-options="{ mergeProps: true }" v-bind="$attrs">
      <slot></slot>
    </Password>
  </template>
  
  <script lang="ts" setup>
  import Password from "primevue/password";
  
  defineOptions({
    inheritAttrs: false,
  });
  
  </script>
  