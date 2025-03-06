<template>
  <Divider v-bind="$attrs">
    <slot />
  </Divider>
</template>
<script setup lang="ts">
import Divider from "primevue/divider";

defineOptions({
  inheritAttrs: false,
});
</script>
