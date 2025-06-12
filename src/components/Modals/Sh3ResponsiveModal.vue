<template>
  <Dialog
    v-model:visible="visible"
    modal
    :breakpoints="{ '1199px': '75vw', '575px': 'w-full' }"
    v-bind="$attrs"
  >
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
    <slot></slot>
  </Dialog>
</template>

<script lang="ts" setup>
import { useSlots } from "vue";
import Dialog from "primevue/dialog";

const visible = defineModel<boolean>();

defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;
</script>
