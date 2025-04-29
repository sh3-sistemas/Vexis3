<script setup lang="ts">
import Popover from "primevue/popover";
import { useSlots, useTemplateRef } from "vue";
import type { PopoverInstanceType } from "./types";

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});

const popoverRef = useTemplateRef<PopoverInstanceType | null>("popover");

const toggle = (event: Event) => {
  popoverRef?.value?.toggle(event);
};

const show = (event: Event) => {
  popoverRef?.value?.show(event);
};

const hide = () => {
  popoverRef?.value?.hide();
};

defineExpose({ toggle, show, hide });
</script>
<template>
  <Popover ref="popover" :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <slot></slot>
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </Popover>
</template>
