<template>
  <DatePicker
    :model-value="formatedData"
    :date-format="presets[preset ?? 'date'].dateFormat"
    :view="presets[preset ?? 'date'].view"
    :readonly="!edit"
    :input-class="edit ? '' : '!border-none !shadow-none !bg-transparent'"
    @value-change="updateData"
  />
</template>

<script setup lang="ts">
import DatePicker, { type DatePickerProps } from "primevue/datepicker";
import dayjs from "dayjs";
import { computed } from "vue";

export type TableInputDateProps = {
  edit: boolean;
  preset?: null | "date" | "month" | "year";
  dateFormatOutput?: string;
};

const { preset = null, dateFormatOutput = "YYYY-MM-DD" } =
  defineProps<TableInputDateProps>();

const data = <any>defineModel();

const formatedData = computed(() =>
  Array.isArray(data.value)
    ? data.value.map((x: string) => dayjs(x).toDate())
    : dayjs(data.value).toDate(),
);

type presetsType = {
  [key: string]: DatePickerProps & { dateFormatOutput: string };
};
const presets = <presetsType>{
  date: {
    dateFormat: "dd/mm/yy",
    view: "date",
    dateFormatOutput: "YYYY-MM-DD",
  },
  month: { dateFormat: "mm/yy", view: "month", dateFormatOutput: "YYYY-MM" },
  year: { dateFormat: "yy", view: "year", dateFormatOutput: "YYYY" },
};

const updateData = (
  value: Date | Date[] | (Date | null)[] | null | undefined,
) => {
  const dateFormat = preset
    ? presets[preset].dateFormatOutput
    : dateFormatOutput;

  data.value = Array.isArray(value)
    ? value.map((x) => dayjs(x).format(dateFormat))
    : dayjs(value).format(dateFormat);
};
</script>
