<template>
  <DataTable
    v-bind="{ ...$attrs, ...props }"
    v-model:selection="selected"
    v-model:editing-rows="editingRows"
    v-model:expanded-rows="expandedRows"
    v-model:filters="filters"
    filter-display="row"
    edit-mode="row"
    :value="items"
    :selection-mode="undefined"
    paginator
    striped-rows
    show-headers
    :rows-per-page-options="[10, 15, 25, 50]"
    paginator-template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
    current-page-report-template="{first} a {last} de {totalRecords}"
    @page="emits('page', $event)"
  >
    <!-- Paginator section -->
    <template #paginatorstart>
      <Sh3Button
        text
        icon="pi pi-trash"
        :severity="selected.length < 1 ? '' : 'danger'"
        :disabled="selected.length < 1"
        @click="emits('deleteSelection')"
      />
    </template>
    <template #paginatorend>
      <Sh3Button
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
      v-if="rowExpansion"
      expander
      style="width: 5rem"
      :filter-header-class="filterHeaderClass"
    />
    <Column
      v-if="selectionMode"
      :selection-mode="selectionMode"
      class="w-10"
      :pt-options="{ mergeProps: true }"
      :pt="{
        headerCell: '!p-2',
        pcHeaderCheckbox: checkboxClass,
        pcRowCheckbox: checkboxClass,
      }"
      :filter-header-class="filterHeaderClass"
    />
    <Column
      v-for="col of columns.filter((x) => x.visible != false)"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
      :filter-header-class="filterHeaderClass"
      :pt="{
        pcSortBadge: { root: 'hidden' },
        filterElementContainer: 'flex-auto',
        filterMenuIcon: '!min-w-4',
        filterClearIcon: '!min-w-4',
      }"
      show-clear-button
      v-bind="{ ...col.props }"
    >
      <template #body="{ data: row, field }">
        <Checkbox
          v-if="col.filterType.toLowerCase() == 'boolean'"
          v-model="row[field as string]"
          disabled
          :binary="true"
        />
        <div v-else-if="col.cellFormater">
          <component :is="col.cellFormater" v-bind="{ row, field }"></component>
        </div>
        <div v-else>{{ getValueByPath(row, field as string) }}</div>
      </template>
      <template v-if="col.editable != false" #editor="{ data: row, field }">
        <Checkbox
          v-if="col.filterType.toLowerCase() == 'boolean'"
          v-model="row[field]"
          :binary="true"
        />
        <div v-else-if="col.cellFormaterEdit">
          <component
            :is="col.cellFormaterEdit.component"
            v-bind="getCellFormaterEditProps(col.cellFormaterEdit, row, field)"
            @selected="
              (value: any) =>
                updateRow(
                  col.cellFormaterEdit.name
                    ? { ...row, [col.cellFormaterEdit.name]: value }
                    : { ...row, [field]: value },
                )
            "
          />
        </div>
        <InputText
          v-else
          v-model="row[field]"
          :type="col.filterType.toLowerCase()"
        />
      </template>

      <template
        v-if="!col.filter?.disabled"
        #filter="{ filterModel, filterCallback }"
      >
        <component
          :is="filterComponents[col.filter?.type ?? 'TextFilter']"
          v-model="filterModel.value"
          :filter-callback="filterCallback"
          :col="col"
          v-bind="{ ...col.filter?.props }"
        />
      </template>
    </Column>
    <Column
      class="w-20"
      :exportable="false"
      :filter-header-class="filterHeaderClass"
    >
      <template #body="{ data: row }">
        <Sh3Button
          icon-pos="right"
          class="!flex mx-auto"
          icon="pi pi-pencil"
          icon-class="text-sm"
          text
          :disabled="editingRows.length > 0 || disabled"
          @click="newEdit(row)"
        />
      </template>
      <template #editor="{ data: row, index }">
        <div class="flex flex-row">
          <Sh3Button
            v-tooltip.top="saveTooltip"
            icon-pos="right"
            variant="text"
            icon="pi pi-check"
            icon-class="text-sm"
            text
            @click="updateRow(row)"
          />
          <Sh3Button
            v-tooltip.top="cancelTooltip"
            icon-pos="right"
            variant="text"
            icon="pi pi-times"
            icon-class="text-sm"
            text
            @click="cancelEdit(row, index)"
          />
        </div>
      </template>
    </Column>

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
import { ref, computed, useSlots, useAttrs, toRef } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import { type Sh3DataTableEditableProps, filterComponents } from "./types";
import { useFilterTable } from "../Filters/composables";
import SearchNotFound from "./fragments/SearchNotFound.vue";

import { saveTooltip, cancelTooltip } from "./fragments/tooltip";
import { getValueByPath } from "./utils";

const attrs = useAttrs();

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Sh3DataTableEditableProps>(), {
  emptyString: "Nenhum Registro encontrado",
  dataKey: "id",
  rowExpansion: false,
  disabled: false,
});

const selected = defineModel<Array<object>>("selection", {
  required: false,
  default: [],
});
const editingRows = defineModel<Array<object>>("editingRows", {
  required: false,
  default: [],
});
const items = defineModel<Array<object>>("items", {
  required: false,
  default: [],
});

const emits = defineEmits(["refresh", "page", "deleteSelection"]);

const slots = useSlots();
// Assert type here to prevent errors in template
const slotNames = Object.keys(slots) as unknown;
const expandedRows = ref({});

const newEdit = (row: object) => {
  if (selected.value.length) {
    selected.value = [];
  }
  editingRows.value = [...editingRows.value, row];
};

const cancelEdit = (row: Record<string, any>, index: number) => {
  editingRows.value = [];
  if (row[props.dataKey as any] && !props.value) return;
  items.value.splice(index, 1);
};

const startNewRow = (startValue?: object) => {
  const newRow = { ...startValue, [props.dataKey as any]: null };
  props.columns.forEach(({ field, default: defaultValue }) => {
    if (defaultValue !== undefined) {
      newRow[field] = defaultValue;
    }
  });

  items.value[items.value.length] = newRow;
  editingRows.value.push(items.value[items.value.length - 1]);
  selected.value = [];
};

defineExpose({ startNewRow });

const checkboxClass = computed(() => ({
  root:
    props.disabled || editingRows.value.length
      ? "rounded flex w-5 form-bg-disabled pointer-events-none"
      : "rounded flex w-5 bg-white",
  input:
    "w-5 h-5 rounded bg-transparent !ring-0 border border-surface-300 cursor-pointer",
  box: "hidden",
}));
const filterHeaderClass =
  "bg-white !border-b !border-solid !border-surface-100";

const { filters } = useFilterTable(
  attrs.filterDisplay,
  toRef(props, "columns"),
);

const getCellFormaterEditProps = (
  cellFormaterEdit: any,
  row: object,
  field: string,
) => {
  const baseProps = { ...cellFormaterEdit.props, row, field };
  if (typeof cellFormaterEdit.propsFunction === "function") {
    return { ...baseProps, ...cellFormaterEdit.propsFunction(row) };
  }
  return baseProps;
};
</script>
