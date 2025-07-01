<template>
  <InputText
    :readonly="!edit"
    :class="edit ? '' : '!border-none !shadow-none !bg-transparent'"
    :pt-options="{ mergeProps: true }"
  />
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import type { TableInputTextProps } from "../types";

withDefaults(defineProps<TableInputTextProps>(), {});
</script>
