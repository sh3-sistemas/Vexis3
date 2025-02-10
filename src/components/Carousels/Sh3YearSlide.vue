<script setup lang="ts">
import { computed } from "vue";
import Carousel from "primevue/carousel";

const emits = defineEmits(["changeYear"]);

export type Sh3YearSliderProps = {
  range: number;
  startYear?: number;
  options?: number[];
  page?: number;
};

const {
  range = 20,
  startYear = Number(new Date().getFullYear()),
  options,
  page = 0,
} = defineProps<Sh3YearSliderProps>();

const calculateYears = (start: number, end: number): Array<number> => {
  const year = startYear - Math.round(range / 2);
  const years = [];

  for (let i = start; i <= end; i += 1) {
    years.push(year + i);
  }

  return years;
};

const yearsList = computed(() => {
  if (options) return options;
  const yearsBefore = calculateYears(0, Math.round(range / 2) - 1);
  const yearsAfter = calculateYears(Math.round(range / 2), range);

  return [...yearsAfter, ...yearsBefore];
});
</script>

<template>
  <Carousel
    :value="yearsList"
    circular
    :show-indicators="false"
    :pt-options="{ mergeProps: true }"
    :page="page"
    :pt="{
      itemList: 'h-full',
      item: 'justify-center items-center',
      pcPrevButton: { root: '!px-2 !py-1 m-1' },
      pcNextButton: { root: '!px-2 !py-1 m-1' },
    }"
    @update:page="(value: number) => emits('changeYear', yearsList[value])"
  >
    <template #item="slotProps">
      {{ slotProps.data }}
    </template>
  </Carousel>
</template>
