<template>
  <Checkbox
    v-if="edit"
    v-model="data"
    binary
    :pt-options="{ mergeProps: true }"
    v-bind="checkboxProps"
  />
  <Tag
    v-else
    :value="formatBooleanToString(data)"
    :severity="formatBoolean(data) ? 'success' : 'danger'"
    :pt-options="{ mergeProps: true }"
    v-bind="tagProps"
  />
</template>

<script setup lang="ts">
import Checkbox from "primevue/checkbox";
import Tag from "primevue/tag";
import { formatBoolean, formatBooleanToString } from "../inputFormat";
import type { TableInputBooleanProps } from "../types";

defineOptions({
  inheritAttrs: false,
});

defineProps<TableInputBooleanProps>();

const data = defineModel<string | number | null | undefined>();
</script>
