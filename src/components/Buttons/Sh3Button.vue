<template>
  <Button :pt-options="{ mergeProps: true }" v-bind="$attrs"
    ><slot></slot
  ></Button>
</template>

<script lang="ts" setup>
import Button from "primevue/button";

defineOptions({
  inheritAttrs: false,
});
</script>
