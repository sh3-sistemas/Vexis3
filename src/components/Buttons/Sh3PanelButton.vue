<template>
  <div class="panel-button">
    <Sh3IconButton
      v-bind="buttonProps"
      class="!p-2.5 !px-4 !m-0"
      @click="toggle"
    >
      <slot name="button"></slot>
    </Sh3IconButton>

    <Popover ref="op" v-bind="panelProps">
      <template #container="slotProps"
        ><slot name="container" v-bind="{ ...slotProps }"></slot
      ></template>
    </Popover>
  </div>
</template>
<script setup lang="ts">
import type { Sh3PanelButtonProps } from "./types";
import Sh3IconButton from "./Sh3IconButton.vue";
import Popover from "primevue/popover";
import { ref } from "vue";
const op = ref();
const toggle = (event: any) => {
  op.value.toggle(event);
};

defineProps<Sh3PanelButtonProps>();
</script>
