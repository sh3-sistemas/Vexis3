<template>
    <Password :pt-options="{ mergeProps: true }" v-bind="$attrs">
    </Password>
  </template>
  
  <script lang="ts" setup>
  import Password from "primevue/password";
  
  defineOptions({
    inheritAttrs: false,
  });
  
  </script>
  