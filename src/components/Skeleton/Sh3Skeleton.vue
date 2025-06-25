<script setup lang="ts">
import Skeleton from "primevue/skeleton";

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <Skeleton :pt-options="{ mergeProps: true }" v-bind="$attrs" />
</template>
