<template>
  <component
    :is="inputComponents[column.type!].component"
    v-model="data"
    :edit="edit"
    :preset="inputComponents[column.type!].preset"
    v-bind="
      typeof column.props?.input == 'function'
        ? column.props.input(data, edit)
        : column.props?.input
    "
  />
</template>

<script setup lang="ts">
import { type DataTableItemColumn } from "../types";
import { inputComponents } from "./inputFormat";

export type InputComponentsProps = {
  column: DataTableItemColumn;
  edit?: boolean;
};

withDefaults(defineProps<InputComponentsProps>(), {
  edit: false,
});

const data = <any>defineModel();
</script>
