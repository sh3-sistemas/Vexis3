<script setup lang="ts">
import TieredMenu from "primevue/tieredmenu";
import { useSlots, useTemplateRef } from "vue";
import type { TieredMenuInstanceType } from "./types";

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});

const tieredMenuRef = useTemplateRef<TieredMenuInstanceType | null>(
  "tieredMenu",
);

const toggle = (event: Event) => {
  tieredMenuRef?.value?.toggle(event);
};

defineExpose({ toggle });
</script>
<template>
  <TieredMenu
    ref="tieredMenu"
    :pt-options="{ mergeProps: true }"
    v-bind="$attrs"
  >
    <slot></slot>
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </TieredMenu>
</template>
