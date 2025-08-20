<template>
  <DynamicTableInputRenderer
    :data="localValue"
    class="p-column-filter w-full"
    :type="column.filter?.type ?? 'text'"
    :props="{
      input: {
        ...getPlaceholder(column.filter?.type ?? 'text'),
        ...(typeof column.filter?.props?.input == 'function'
          ? column.filter?.props?.input(localValue, true)
          : column.filter?.props?.input),
      },
    }"
    :fluid="true"
    edit
    @change="update"
  />
  <div v-if="mode == 'menu'">
    <Sh3Button
      label="Limpar seleção"
      class="text-sm p-0 mb-4 underline hover:no-underline"
      link
      @click="clearFilter"
    />
    <div class="grid grid-cols-2 gap-2">
      <Sh3Button label="Cancelar" outlined @click="applyFilter" />
      <Sh3Button
        label="Aplicar"
        @click="
          () => {
            data = localValue;
            applyFilter();
          }
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { type DataTableItemColumn } from "../types";
import DynamicTableInputRenderer from "./DynamicTableInputRenderer.vue";
import { debounce } from "@/services/fetch/debounce.js";

export type InputFiltersProps = {
  mode?: string;
  column: DataTableItemColumn;
  edit?: boolean;
  filterCallback: () => void;
  applyFilter: () => void;
};

const props = withDefaults(defineProps<InputFiltersProps>(), {
  mode: "row",
  edit: false,
});

const data = defineModel<any>();
const localValue = ref(data.value);

defineEmits(["change"]);

const updateModel = debounce((value: any) => {
  data.value = value;
  props.filterCallback();
}, 300);

const update = (newValue: any) => {
  localValue.value = newValue;
  if (props.mode == "row") updateModel(newValue);
};

const clearFilter = () => {
  data.value = undefined;
  props.filterCallback();
  props.applyFilter();
};

const getPlaceholder = (type: string) => {
  if (type == "tag") return { inputProps: { placeholder: "Insira filtragem" } };

  if (["select", "selectTag", "multiSelect", "multiSelectTag"].includes(type))
    return { placeholder: "Selecione filtragem" };

  return { placeholder: "Insira filtragem" };
};

watch(data, (newData) => (localValue.value = newData));
</script>
