<template>
  <component
    :is="inputComponents[column.type!]"
    v-model="data"
    :edit="edit"
    v-bind="
      typeof column.props?.input == 'function'
        ? column.props.input(data)
        : column.props?.input
    "
  />
</template>

<script setup lang="ts">
import { type DataTableItemColumn } from "../types";
import { inputComponents } from "./inputFormat";

export type inputComponentsProps = {
  column: DataTableItemColumn;
  edit?: boolean;
};

withDefaults(defineProps<inputComponentsProps>(), {
  edit: <boolean>false,
});

const data = <any>defineModel();
</script>
