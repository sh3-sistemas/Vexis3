<script setup lang="ts">
import Textarea from "primevue/textarea";

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <Textarea :pt-options="{ mergeProps: true }" v-bind="$attrs" />
</template>
