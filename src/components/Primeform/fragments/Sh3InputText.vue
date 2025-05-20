<template>
    <InputText :pt-options="{ mergeProps: true }" v-bind="$attrs">
    </InputText>
  </template>
  
  <script lang="ts" setup>
  import InputText from "primevue/inputtext";
  
  defineOptions({
    inheritAttrs: false,
  });
  
  </script>
  