<template>
  <InputMask
    v-model="filterModel"
    type="text"
    class="p-column-filter max-w-[135px]"
    placeholder="Pesquisar"
    @input="filterCallback()"
  />
</template>

<script lang="ts" setup>
import InputMask from "primevue/inputmask";

import type { FilterProps } from "./types";
import type { Nullable } from "@/types/helper";

withDefaults(defineProps<FilterProps>(), {
  col: () => ({
    field: "",
    header: "",
  }),
  filterCallback: () => {},
});

const filterModel = defineModel<Nullable<string>>();
</script>
