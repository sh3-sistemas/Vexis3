<script setup lang="ts">
import { computed } from "vue";
import Carousel from "primevue/carousel";
import { calculateYears } from "./fragments/utils";

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

const yearsList = computed(() => {
  if (options) return options;

  const rangeHalf = Math.round(range / 2);
  const yearsBefore = calculateYears(startYear - rangeHalf, rangeHalf - 1);
  const yearsAfter = calculateYears(startYear, rangeHalf);

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
