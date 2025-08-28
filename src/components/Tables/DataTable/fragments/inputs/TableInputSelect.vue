<template>
  <Tag
    v-if="!edit && preset == 'selectTag'"
    v-bind="tagOption"
    :value="tagOption?.name"
    :pt-options="{ mergeProps: true }"
  />
  <Select
    v-else
    :default-value="value"
    :options="options"
    :option-label="preset ? presets[preset].optionLabel : undefined"
    :option-value="preset ? presets[preset].optionValue : undefined"
    :pt-options="{ mergeProps: true }"
    :pt="edit ? {} : nonEditPT"
    :disabled="!edit"
    v-bind="$attrs"
    @value-change="(value: any) => $parent?.$emit('change', value)"
  >
    <template v-if="preset == 'selectTag'" #option="slotProps">
      <Tag
        v-bind="slotProps.option"
        :value="slotProps.option?.name"
        :pt-options="{ mergeProps: true }"
      />
    </template>
  </Select>
</template>

<script lang="ts" setup>
import Select, { type SelectProps } from "primevue/select";
import Tag from "primevue/tag";
import type {
  TableInputSelectProps,
  PresetsType,
  PresetKeySelect,
} from "../types";
import { computed } from "vue";

const props = defineProps<TableInputSelectProps>();

const presets = <PresetsType<PresetKeySelect, SelectProps>>{
  selectTag: { optionLabel: "name", optionValue: "value" },
};

const tagOption = computed(() => {
  return props.preset == "selectTag"
    ? props.options.find((x) => x.value == props.value)
    : undefined;
});

const nonEditPT = {
  root: "!border-none !shadow-none !bg-transparent !opacity-100",
  label: "!text-inherit",
  dropdown: "hidden",
};
</script>
