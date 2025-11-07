<template>
  <component
    :is="inputComponents[resolveType(type, row)].component"
    :value="data"
    :edit="edit"
    :preset="inputComponents[resolveType(type, row)].preset"
    v-bind="
      typeof props?.input == 'function'
        ? props.input(data, edit, row)
        : props?.input
    "
  />
</template>

<script setup lang="ts">
import type {
  DataTableItemColumnPropsVariations,
  InputComponentsKeys,
} from "./types";
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

const resolveType = (
  type:
    | InputComponentsKeys
    | ((rowData: any) => InputComponentsKeys)
    | undefined,
  row: any,
) => {
  if (!type) return "text";
  return typeof type == "function" ? type(row) : type;
};
</script>
