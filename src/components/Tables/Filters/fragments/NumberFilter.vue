<template>
  <InputNumber
    v-model="filterModel"
    :pt-options="{ mergeProps: true }"
    :pt="{ pcInputText: 'p-column-filter max-w-[135px]' }"
    placeholder="Pesquisar"
    @input="update"
  />
</template>

<script lang="ts" setup>
import InputNumber from "primevue/inputnumber";
import type { InputNumberInputEvent } from "primevue";

import type { FilterProps } from "./types";
import type { Nullable } from "@/types/helper";

const { filterCallback } = withDefaults(defineProps<FilterProps>(), {
  col: () => ({
    field: "",
    header: "",
  }),
  filterCallback: () => {},
});

const update = (e: InputNumberInputEvent) => {
  filterModel.value = Number(e.value);
  filterCallback();
};

const filterModel = defineModel<Nullable<number>>();
</script>
