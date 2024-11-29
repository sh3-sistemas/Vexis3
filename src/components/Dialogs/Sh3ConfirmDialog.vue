<template>
  <ConfirmDialog :draggable="false" group="crud-confirmation" v-bind="$attrs">
    <template #container="containerSlotProps">
      <RequiredConfirmation
        v-bind="{
          ...containerSlotProps,
        }"
      />
    </template>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import ConfirmDialog from "primevue/confirmdialog";
import RequiredConfirmation from "./templates/RequiredConfirmation.vue";

defineOptions({
  inheritAttrs: false,
});
</script>
