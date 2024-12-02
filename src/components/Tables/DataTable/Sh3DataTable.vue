<template>
  <DataTable
    v-model:filters="filters"
    :value="items"
    paginator
    striped-rows
    table-style="min-width: 50rem"
    :rows-per-page-options="[5, 10, 20, 50]"
    paginator-template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    current-page-report-template="{first} a {last} de {totalRecords}"
    v-bind="$attrs"
  >
    <!-- Paginator section -->
    <template #paginatorstart> </template>
    <template #paginatorend>
      <Button
        type="button"
        icon="pi pi-refresh"
        text
        @click="emits('refresh')"
      />
    </template>
    <template #empty>
      <SearchNotFound />
    </template>
    <Column
      v-if="selectionMode"
      :selection-mode="selectionMode"
      header-style="width: 3rem"
      filter-header-style="background-color: white"
      :pt="{
        rowRadioButton: 'bg-red-500 text-red-600',
      }"
    >
    </Column>
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      filter-header-style="background-color: white"
      reorderable-column
      v-bind="{ ...col.props }"
    >
      <template v-if="col.type == 'tag'" #body="slotProps">
        <Tag
          :value="slotProps.data[col.field]"
          v-bind="col.props?.tag ? col.props.tag(slotProps.data) : {}"
        />
      </template>

      <template v-if="col.filter" #filter="{ filterModel, filterCallback }">
        <component
          :is="filterComponents[col.filter.type]"
          v-model="filterModel.value"
          :filter-callback="filterCallback"
          :col="col"
        />
      </template>
    </Column>

    <Column v-if="actions.length > 0" frozen header="Ações" :exportable="false">
      <template #body="slotProps">
        <div class="actions-wrapper">
          <button
            v-for="{ icon, color, action, disabled } of actions.filter(
              (action) => action.permission(slotProps.data),
            )"
            :key="icon"
            :disabled="disabled(slotProps.data)"
            @click="action(slotProps.data)"
          >
            <Icon :icon="icon" :class="twMerge('w-5 h-auto text-sm', color)" />
          </button>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column from "primevue/column";
import Tag from "primevue/tag";
import { Icon } from "@iconify/vue";
import { useAttrs } from "vue";
import { twMerge } from "tailwind-merge";
import { useFilterTable } from "../Filters/composables";
import SearchNotFound from "./fragments/SearchNotFound.vue";
import {
  type Action,
  type DataTableItemColumn,
  type Sh3DataTableProps,
  filterComponents,
} from "./types";

defineOptions({
  inheritAttrs: true,
});

const attrs = useAttrs();

const props = withDefaults(defineProps<Sh3DataTableProps>(), {
  empty: "Nenhum item encontrado.",
  items: () => <any[]>[],
  columns: () => <DataTableItemColumn[]>[],
  actions: () => <Action[]>[],
  selectionMode: null,
});

const emits = defineEmits(["refresh"]);

const { filters } = useFilterTable(attrs.filterDisplay, props.columns);
</script>
