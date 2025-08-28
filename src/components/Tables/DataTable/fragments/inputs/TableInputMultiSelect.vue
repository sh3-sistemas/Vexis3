<template>
  <Tag
    v-if="!edit && preset == 'multiSelectTag'"
    v-bind="tagOption"
    :value="tagOption.name"
    :pt-options="{ mergeProps: true }"
  />
  <MultiSelect
    v-else
    :default-value="value"
    :options="options"
    :option-label="preset ? presets[preset].optionLabel : undefined"
    :option-value="preset ? presets[preset].optionValue : undefined"
    :pt-options="{ mergeProps: true }"
    :pt="edit ? {} : nonEditPT"
    :disabled="!edit"
    :max-selected-labels="1"
    v-bind="$attrs"
    @value-change="(value: any) => $parent?.$emit('change', value)"
  >
    <template v-if="preset == 'multiSelectTag'" #option="slotProps">
      <Tag
        v-bind="slotProps.option"
        :value="slotProps.option.name"
        :pt-options="{ mergeProps: true }"
      />
    </template>
  </MultiSelect>
</template>

<script lang="ts" setup>
import MultiSelect, { type MultiSelectProps } from "primevue/multiselect";
import Tag from "primevue/tag";
import type {
  TableInputMultiSelectProps,
  PresetsType,
  PresetKeyMultiSelect,
} from "../types";
import { computed } from "vue";

const props = defineProps<TableInputMultiSelectProps>();

const presets = <PresetsType<PresetKeyMultiSelect, MultiSelectProps>>{
  multiSelectTag: { optionLabel: "name", optionValue: "value" },
};

const tagOption = computed(() => {
  return props.preset == "multiSelectTag"
    ? props.options.find((x) => x.value == props.value)
    : undefined;
});

const nonEditPT = {
  root: "!border-none !shadow-none !bg-transparent !opacity-100",
  label: "!text-inherit",
  dropdown: "hidden",
};
</script>
