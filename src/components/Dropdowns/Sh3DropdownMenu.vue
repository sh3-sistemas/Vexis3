<template>
  <PanelMenu class="w-full md:w-[20rem]" v-bind="$attrs">
    <!-- demonstrate Vue 3 dynamic slot/template pass through -->
    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </PanelMenu>
</template>

<script lang="ts" setup>
import PanelMenu from "primevue/panelmenu";
import { useSlots } from "vue";

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});
</script>
