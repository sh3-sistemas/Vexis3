<template>
  <Dropdown
    v-model="filterModel"
    placeholder="Selecione um"
    class="p-column-filter w-full"
    option-label="name"
    option-value="value"
    :show-clear="true"
    @change="filterCallback()"
  >
    <template #option="slotProps">
      <Tag
        v-bind="slotProps.option"
        :value="slotProps.option.name"
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

defineProps<FilterProps>();

const filterModel = defineModel<ColumnFilterModelType>();
</script>
