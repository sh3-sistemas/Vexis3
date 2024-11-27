<template>
  <div class="panel-button">
    <Sh3IconButton @click="toggle" v-bind="buttonProps">
      <slot name="button"></slot>
    </Sh3IconButton>

    <OverlayPanel ref="op" v-bind="panelProps">
      <template #container="slotProps"
        ><slot name="container" v-bind="{ ...slotProps }"></slot
      ></template>
    </OverlayPanel>
  </div>
</template>
<script setup lang="ts">
import type { Sh3PanelButtonProps } from "./types";
import Sh3IconButton from "./Sh3IconButton.vue";
import OverlayPanel from "primevue/overlaypanel";
import { ref } from "vue";
const op = ref();
const toggle = (event: any) => {
  op.value.toggle(event);
};

defineProps<Sh3PanelButtonProps>();
</script>
