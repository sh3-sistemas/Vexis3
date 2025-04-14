<template>
  <Dropdown
    v-model="filterModel"
    placeholder="Selecione um"
    class="p-column-filter"
    option-label="name"
    option-value="value"
    :show-clear="true"
    @change="filterCallback()"
  >
    <template #option="slotProps">
      <Tag
        :value="slotProps.option.name"
        v-bind="slotProps.option"
        :pt-options="{ mergeProps: true }"
      />
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import type { ColumnFilterModelType } from "primevue/column";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import type { FilterProps } from "./types";

withDefaults(defineProps<FilterProps>(), {
  col: () => ({
    field: "",
    header: "",
  }),
  filterCallback: () => {},
});

const filterModel = defineModel<ColumnFilterModelType>();
</script>
