<template>
  <Checkbox v-model="filterModel" binary @change="filterCallback()" />
</template>
<script setup lang="ts">
import Checkbox from "primevue/checkbox";

import type { FilterProps } from "./types";

defineProps<FilterProps>();

const filterModel = defineModel<boolean>();
</script>
