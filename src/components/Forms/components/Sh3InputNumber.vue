<script setup lang="ts">
import InputNumber from "primevue/inputnumber";

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <InputNumber :pt-options="{ mergeProps: true }" v-bind="$attrs" />
</template>
