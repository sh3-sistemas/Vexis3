<template>
  <!-- TODO: Use primevue drawer -->
  <div
    id="drawer-right-example"
    class="fixed top-0 right-0 z-40 w-screen md:w-1/3 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1"
    aria-labelledby="drawer-right-label"
  >
    <h5
      id="drawer-right-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500"
    >
      {{ title }}
    </h5>
    <button
      type="button"
      data-drawer-hide="drawer-right-example"
      aria-controls="drawer-right-example"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
    >
      <Icon icon="tabler:x" class="w-4 h-auto" />
      <span class="sr-only">Close menu</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
[drawer-backdrop] {
  background-color: black;
  opacity: 0.1;
}
</style>
