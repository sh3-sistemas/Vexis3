<template>
  <Sh3Dropdown
    v-model="filterModel"
    placeholder="Selecione um"
    class="p-column-filter"
    @value-change="filterCallback()"
  />
</template>

<script lang="ts" setup>
import type { FilterProps } from "./types";
import Sh3Dropdown from "@/components/Dropdowns/Sh3Dropdown.vue";

withDefaults(defineProps<FilterProps>(), {
  col: () => ({
    field: "",
    header: "",
  }),
  filterCallback: () => {},
});

const filterModel = defineModel<any>();
</script>
