<template>
  <Tag
    v-if="!edit"
    :value="data"
    :pt-options="{ mergeProps: true }"
    v-bind="tagProps"
  />
  <InputText
    v-else
    v-model="data"
    :pt-options="{ mergeProps: true }"
    v-bind="inputProps"
  />
</template>

<script setup lang="ts">
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";
import type { TableInputTagProps } from "../types";

defineProps<TableInputTagProps>();

const data = defineModel<string | null | undefined>();
</script>
