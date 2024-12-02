<template>
  <Message :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <slot></slot>
  </Message>
</template>

<script lang="ts" setup>
import Message from "primevue/message";

defineOptions({
  inheritAttrs: false,
});

defineProps<{ label: string }>();
</script>
