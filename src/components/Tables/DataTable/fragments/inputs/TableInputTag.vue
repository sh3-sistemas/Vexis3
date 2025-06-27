<template>
  <Tag v-if="!edit" :value="data" />
  <InputText v-else v-model="data" />
</template>

<script setup lang="ts">
import Tag from "primevue/tag";
import InputText from "primevue/inputnumber";

export type TableInputNumberProps = { edit: boolean };
defineProps<TableInputNumberProps>();

const data = <any>defineModel();
</script>
