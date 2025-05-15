<template>
  <InputText
    v-model="filterModel"
    type="text"
    class="p-column-filter"
    placeholder="Pesquisar"
    fluid
    @value-change="update"
  />
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext";

import type { FilterProps } from "./types";
import type { Nullable } from "@/types/helper";

import { debounce } from "@/services/fetch/debounce.js";

const { filterCallback } = defineProps<FilterProps>();

const update = debounce((str: undefined | string) => {
  filterModel.value = str;
  filterCallback();
}, 300);

const filterModel = defineModel<Nullable<string>>();
</script>
