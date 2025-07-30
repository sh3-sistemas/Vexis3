<template>
  <Tag v-if="!edit" :pt-options="{ mergeProps: true }" v-bind="tagProps" />
  <InputText
    v-else
    :pt-options="{ mergeProps: true }"
    v-bind="inputProps"
    @value-change="(value) => $parent?.$emit('change', value)"
  />
</template>

<script setup lang="ts">
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";
import type { TableInputTagProps } from "../types";

defineProps<TableInputTagProps>();
</script>
