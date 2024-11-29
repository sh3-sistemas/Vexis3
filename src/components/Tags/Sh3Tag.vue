<template>
  <Tag :ptOptions="{ mergeProps: true }" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import Tag from "primevue/tag";

defineOptions({
  inheritAttrs: false,
});
</script>
