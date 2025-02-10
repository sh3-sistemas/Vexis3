<script setup lang="ts">
import InputText from "primevue/inputtext";

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <InputText :pt-options="{ mergeProps: true }" v-bind="$attrs" />
</template>
