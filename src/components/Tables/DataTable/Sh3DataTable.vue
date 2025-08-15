<template>
  <DataTable
    v-model:filters="filters"
    v-model:expanded-rows="expandedRows"
    :value="items"
    paginator
    striped-rows
    table-style="min-width: 50rem"
    :rows-per-page-options="[10, 15, 25, 50]"
    paginator-template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
    current-page-report-template="{first} a {last} de {totalRecords}"
    :selection-mode="selectionMode ?? undefined"
    :pt-options="{ mergeProps: true }"
    :pt="tableStyle"
    v-bind="$attrs"
  >
    <!-- Paginator section -->
    <template #paginatorstart> </template>
    <template #paginatorend>
      <Button
        type="button"
        severity="contrast"
        icon="pi pi-refresh"
        text
        @click="emits('refresh')"
      />
    </template>
    <template #empty>
      <SearchNotFound />
    </template>
    <Column
      v-if="rowExpansion"
      expander
      style="width: 5rem"
      :filter-header-class="filterHeaderClass"
    />
    <Column
      v-if="selectionMode"
      :selection-mode="selectionMode"
      header-style="width: 3rem"
      :filter-header-class="filterHeaderClass"
    >
    </Column>
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :filter-header-class="filterHeaderClass"
      :pt="ptColumnFilters"
      reorderable-column
      show-clear-button
      v-bind="{ ...col.props }"
    >
      <template v-if="col.type" #body="slotProps">
        <DynamicTableInputRenderer
          :data="getValueByPath(slotProps.data, col.field)"
          :column="col"
          :type="col.type"
          :props="col.props"
        />
      </template>

      <template
        v-if="col.filter && !col.filter.disabled"
        #filter="{ filterModel, filterCallback, applyFilter }"
      >
        <FilterRender
          v-model="filterModel.value"
          :column="col"
          :filter-callback="filterCallback"
          :apply-filter="applyFilter"
          :mode="($attrs.filterDisplay ?? $attrs['filter-display']) as string"
        />
      </template>
    </Column>

    <Column
      v-if="actions.length > 0"
      frozen
      header="Ações"
      :exportable="false"
      :filter-header-class="filterHeaderClass"
    >
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

    <slot name="extra-columns"></slot>

    <template
      v-for="(slot, index) of slotNames"
      :key="index"
      #[slot]="slotProps"
    >
      <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
    </template>
  </DataTable>
</template>

<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column from "primevue/column";
import { Icon } from "@iconify/vue";
import { useAttrs } from "vue";
import { twMerge } from "tailwind-merge";
import { useFilterTable } from "../Filters/composables";
import SearchNotFound from "./fragments/SearchNotFound.vue";
import {
  type Action,
  type DataTableItemColumn,
  type Sh3DataTableProps,
} from "./types";
import { ref, useSlots, toRef } from "vue";
import { tableStyle, getValueByPath, ptColumnFilters } from "./utils";
import DynamicTableInputRenderer from "./fragments/DynamicTableInputRenderer.vue";
import FilterRender from "./fragments/FilterRender.vue";

defineOptions({
  inheritAttrs: true,
});

const attrs = useAttrs();
const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;
const expandedRows = ref({});

const props = withDefaults(defineProps<Sh3DataTableProps>(), {
  empty: "Nenhum item encontrado.",
  items: () => <any[]>[],
  columns: () => <DataTableItemColumn[]>[],
  actions: () => <Action[]>[],
  selectionMode: null,
  rowExpansion: false,
});

const emits = defineEmits(["refresh"]);

const filterHeaderClass =
  "bg-white !border-b !border-solid !border-surface-100";

const { filters } = useFilterTable(
  attrs.filterDisplay ?? attrs["filter-display"],
  toRef(props, "columns"),
);
</script>
