<template>
  <InputMask
    v-model="filterModel"
    class="p-column-filter"
    placeholder="Pesquisar"
    mask=""
    fluid
    @value-change="update"
  />
</template>

<script lang="ts" setup>
import InputMask from "primevue/inputmask";

import type { FilterProps } from "./types";

import { debounce } from "@/services/fetch/debounce.js";

const { filterCallback } = defineProps<FilterProps>();

const update = debounce((str: string) => {
  filterModel.value = str;
  filterCallback();
}, 300);

const filterModel = defineModel<string>();
</script>
