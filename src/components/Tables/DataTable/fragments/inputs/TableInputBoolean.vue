<template>
  <Checkbox
    v-if="edit"
    :default-value="formatBoolean(value)"
    binary
    :pt-options="{ mergeProps: true }"
    v-bind="checkboxProps"
    @value-change="(value) => $parent?.$emit('change', value)"
  />
  <Tag
    v-else
    :value="formatBooleanToString(value)"
    :severity="formatBoolean(value) ? 'success' : 'danger'"
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
</script>
