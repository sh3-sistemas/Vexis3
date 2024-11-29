<template>
  <IconField icon-position="right" @click="toggle">
    <InputIcon class="pi pi-search"> </InputIcon>
    <InputText v-model="inputDate" placeholder="Search" />
  </IconField>

  <Popover ref="op" append-to="body">
    <div class="overlay-wrapper flex flex-col gap-y-2">
      <div class="max-min-calendar-wrapper">
        <div class="flex gap-4">
          <DatePicker
            v-model="minDate"
            placeholder="Min."
            v-bind="maxMinProps"
          />
          <Divider />
          <DatePicker
            v-model="maxDate"
            placeholder="Máx."
            v-bind="maxMinProps"
          />
          <Sh3Button label="Ok" @click="selectDate" />
        </div>
      </div>
      <div class="flex justify-content-center items-center w-full flex-col">
        <DatePicker
          v-model="date"
          selection-mode="range"
          inline
          date-format="dd/mm/yy"
        />

        <span v-if="countDaysBeetweenDates" class="text-selenium-800 my-2">
          {{ countDaysBeetweenDates }} dias selecionados</span
        >
      </div>
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { ref, watch, computed, type PropType } from "vue";
import DatePicker, { type DatePickerProps } from "primevue/datepicker";
import Popover from "primevue/popover";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import { Sh3Button } from "@/components/Buttons";
import type { DataTableItemColumn } from "../../DataTable/types";

const props = defineProps({
  col: {
    type: Object as PropType<DataTableItemColumn>,
    default: () => {
      return {
        filter: {
          options: [],
        },
      };
    },
  },
  filterCallback: {
    type: Function,
    default: () => {
      // Implement your filter callback logic here
    },
  },
});

// const filterModel = defineModel<Nullable<string>>();
const date = ref();
const inputDate = ref();

const minDate = ref();
const maxDate = ref();
const maxMinProps = <DatePickerProps>{
  showIcon: true,
  iconDisplay: "input",
  dateFormat: "dd/mm/yy",
  ptOptions: { mergeProps: true },
  pt: {
    input: "w-28",
  },
};

const op = ref();
const toggle = (event: any) => {
  op.value.toggle(event);
};

watch([minDate, maxDate], ([min, max]: Array<Date>) => {
  if (min && max) {
    date.value = [min, max];
  }
});

watch(date, (value: Array<Date>) => {
  if (value) {
    minDate.value = value[0];
    maxDate.value = value[1];
  }
});

const selectDate = (event: any) => {
  inputDate.value = `${minDate.value?.toLocaleDateString()} - ${maxDate.value?.toLocaleDateString()}`;
  props.filterCallback();

  toggle(event);
};

const countDaysBeetweenDates = computed(() => {
  if (!maxDate.value || !minDate.value) return null;

  return (
    Math.floor(
      (maxDate.value.getTime() - minDate.value.getTime()) /
        (1000 * 60 * 60 * 24),
    ) + 1
  );
});
</script>
