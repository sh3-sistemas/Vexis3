<template>
  <DatePicker
    :model-value="formatedData"
    :date-format="presets[preset ?? 'date'].dateFormat"
    :view="presets[preset ?? 'date'].view"
    :readonly="!edit"
    :input-class="edit ? '' : '!border-none !shadow-none !bg-transparent'"
    :pt-options="{ mergeProps: true }"
    v-bind="$attrs"
    @value-change="(value) => $parent?.$emit('change', updateData(value))"
  />
</template>

<script setup lang="ts">
import DatePicker, { type DatePickerProps } from "primevue/datepicker";
import dayjs, { type ConfigType } from "dayjs";
import { computed } from "vue";
import type { PresetKeyDate, TableInputDateProps, PresetsType } from "../types";

defineOptions({
  inheritAttrs: false,
});

const {
  value: data,
  preset,
  dateFormatOutput = "YYYY-MM-DD",
} = defineProps<TableInputDateProps>();

const formatedData = computed(() =>
  Array.isArray(data)
    ? data.map((x: ConfigType) => dayjs(x).toDate())
    : dayjs(data).toDate(),
);

const presets = <
  PresetsType<PresetKeyDate, DatePickerProps & { dateFormatOutput: string }>
>{
  date: {
    dateFormat: "dd/mm/yy",
    view: "date",
    dateFormatOutput: "YYYY-MM-DD",
  },
  month: { dateFormat: "mm/yy", view: "month", dateFormatOutput: "YYYY-MM" },
  year: { dateFormat: "yy", view: "year", dateFormatOutput: "YYYY" },
};

/**
 * Converte o valor do DatePicker para o formato de saida, definido pelo props dateFormatOutput, e atualiza o Model.
 *
 * @param {Date | Date[] | (Date | null)[] | null | undefined} value - O valor a ser convertido.
 *
 * @example
 * dateFormatOutput= "YYYY-MM"
 * updateData(Sat Feb 01 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília));
 * // Retorna 02/2025
 * @example
 * dateFormatOutput= "YYYY-MM"
 * updateData([Sun Jun 01 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília), Sat Mar 01 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)]);
 * // Retorna [06/2025, 03/2025]
 */
const updateData = (
  value: Date | Date[] | (Date | null)[] | null | undefined,
) => {
  const dateFormat = preset
    ? presets[preset].dateFormatOutput
    : dateFormatOutput;

  return Array.isArray(value)
    ? value.map((x) => dayjs(x).format(dateFormat))
    : dayjs(value).format(dateFormat);
};
</script>
