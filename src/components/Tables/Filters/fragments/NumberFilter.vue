<template>
  <InputNumber
    v-model="filterModel"
    :pt-options="{ mergeProps: true }"
    :pt="{ pcInputText: { root: 'p-column-filter w-full' } }"
    placeholder="Pesquisar"
    fluid
    @input="update"
  />
</template>

<script lang="ts" setup>
import InputNumber from "primevue/inputnumber";
import type { InputNumberInputEvent } from "primevue";

import type { FilterProps } from "./types";
import type { Nullable } from "@/types/helper";

import { debounce } from "@/services/fetch/debounce.js";

const { filterCallback } = defineProps<FilterProps>();

const update = debounce((e: InputNumberInputEvent) => {
  filterModel.value = Number(e.value);
  filterCallback();
}, 300);

const filterModel = defineModel<Nullable<number>>();
</script>
