<template>
  <Button :label="label" :ptOptions="{ mergeProps: true }" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import Button from "primevue/button";

defineOptions({
  inheritAttrs: false,
});

defineProps<{ label: string }>();
</script>
