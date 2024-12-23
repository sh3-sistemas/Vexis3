<template>
  <DataTable
    v-model:selection="selected"
    v-model:editing-rows="editingRows"
    v-model:expanded-rows="expandedRows"
    edit-mode="row"
    :data-key="dataKey"
    :value="items"
    :selection-mode="undefined"
    paginator
    striped-rows
    show-headers
    :loading="loading"
    :removable-sort="removableSort"
    :rows="rows"
    :pt="pt"
    :pt-options="ptOptions"
    :rows-per-page-options="[5, 10, 20, 50]"
    paginator-template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    current-page-report-template="{first} a {last} de {totalRecords}"
    v-bind="$attrs"
    @update:selection="selectRow"
    @page="emits('page', $event)"
  >
    <!-- Paginator section -->
    <template #paginatorstart> </template>
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
    <Column v-if="selectionMode" :selection-mode="selectionMode" class="w-10" />
    <Column
      v-for="col of columns.filter((x) => x.visible != false)"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
      :pt="{ sortBadge: 'hidden' }"
    >
      <template #body="{ data: row, field }">
        <Checkbox
          v-if="col.filterType.toLowerCase() == 'boolean'"
          v-model="row[field]"
          disabled
          :binary="true"
        />
        <div v-else-if="col.cellFormater">
          <component :is="col.cellFormater" v-bind="{ row, field }"></component>
        </div>
        <div v-else>{{ getValueByPath(row, field) }}</div>
      </template>
      <template v-if="col.editable != false" #editor="{ data: row, field }">
        <InputText
          v-if="col.filterType.toLowerCase() != 'boolean'"
          v-model="row[field]"
          :type="col.filterType.toLowerCase()"
        />
        <Checkbox v-else v-model="row[field]" :binary="true" />
      </template>
    </Column>
    <Column class="w-20">
      <template #body="{ data: row }">
        <Sh3Button
          icon-pos="right"
          class="!flex mx-auto"
          icon="pi pi-pencil"
          icon-class="text-sm"
          text
          :disabled="editingRows.length > 0"
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
import { ref, useSlots } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import type { Sh3DataTableEditableProps } from "./types";
import SearchNotFound from "./fragments/SearchNotFound.vue";

import { saveTooltip, cancelTooltip } from "./fragments/tooltip";
import { getValueByPath } from "./utils";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Sh3DataTableEditableProps>(), {
  emptyString: "Nenhum Registro encontrado",
  dataKey: "id",
  rowExpansion: false,
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

const emits = defineEmits(["refresh", "page"]);

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

const selectRow = () => {
  if (editingRows.value.length) {
    selected.value = [];
  }
};

const startNewRow = () => {
  const newRow = { [props.dataKey as any]: null };
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
</script>
