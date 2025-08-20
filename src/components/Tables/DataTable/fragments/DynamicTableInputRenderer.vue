<template>
  <component
    :is="inputComponents[type!].component"
    :value="data"
    :edit="edit"
    :preset="inputComponents[type!].preset"
    v-bind="
      typeof props?.input == 'function'
        ? props.input(data, edit, row)
        : props?.input
    "
  />
</template>

<script setup lang="ts">
import type { DataTableItemColumnPropsVariations } from "./types";
import { inputComponents } from "./inputFormat";

export type InputComponentsProps = {
  data: any;
  edit?: boolean;
  row?: object;
} & DataTableItemColumnPropsVariations;

withDefaults(defineProps<InputComponentsProps>(), {
  edit: false,
  row: undefined,
});

defineEmits(["change"]);
</script>
