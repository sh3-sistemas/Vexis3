<template>
  <Dialog
    v-model:visible="visible"
    modal
    :breakpoints="{ '1199px': '75vw', '575px': 'w-full' }"
    v-bind="$attrs"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
  </Dialog>
</template>

<script lang="ts" setup>
import Dialog from "primevue/dialog";

const visible = defineModel<boolean>();

defineOptions({
  inheritAttrs: false,
});
</script>
