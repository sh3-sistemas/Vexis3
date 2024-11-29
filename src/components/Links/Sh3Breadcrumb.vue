<template>
  <div class="card flex justify-content-center">
    <Breadcrumb v-bind="$attrs">
      <!-- demonstrate Vue 3 dynamic slot/template pass through -->
      <template
        v-for="(slot, index) of slotNames"
        :key="index"
        #[slot]="slotProps"
      >
        <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "primevue/breadcrumb";
import { useSlots } from "vue";

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;

defineOptions({
  inheritAttrs: false,
});
</script>
