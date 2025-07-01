<template>
  <Sh3MultiDropdown
    v-model="filterModel"
    placeholder="Selecione"
    class="p-column-filter w-full"
    :max-selected-labels="1"
    @value-change="filterCallback()"
  />
</template>

<script lang="ts" setup>
import type { FilterProps } from "./types";
import Sh3MultiDropdown from "@/components/Dropdowns/Sh3MultiDropdown.vue";

defineProps<FilterProps>();

const filterModel = defineModel<any>();
</script>
