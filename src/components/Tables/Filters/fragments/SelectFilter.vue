<template>
  <Sh3Dropdown
    v-model="filterModel"
    placeholder="Selecione um"
    class="p-column-filter w-full"
    @value-change="filterCallback()"
  />
</template>

<script lang="ts" setup>
import type { FilterProps } from "./types";
import Sh3Dropdown from "@/components/Dropdowns/Sh3Dropdown.vue";

defineProps<FilterProps>();

const filterModel = defineModel<any>();
</script>
