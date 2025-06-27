<template>
  <Checkbox v-if="edit" v-model="data" binary />
  <Tag
    v-else
    :value="formatBooleanToString(data)"
    :severity="formatBoolean(data) ? 'success' : 'danger'"
  />
</template>

<script setup lang="ts">
import Checkbox from "primevue/checkbox";
import Tag from "primevue/tag";
import { formatBoolean, formatBooleanToString } from "../inputFormat";

export type TableInputBooleanProps = { edit: boolean };
defineProps<TableInputBooleanProps>();

const data = <any>defineModel();
</script>
