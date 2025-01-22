<script setup lang="ts">
import { computed } from "vue";
import Carousel from "primevue/carousel";

const emits = defineEmits(["changeYear"]);

export type Sh3YearSliderProps = {
  range: number;
  startYear?: number;
};

const { range = 20, startYear = Number(new Date().getFullYear()) } =
  defineProps<Sh3YearSliderProps>();

const yearsList = computed(() => {
  const year = startYear - Math.round(range / 2);
  const yearsBefore = [];
  const yearsAfter = [];
  for (let i = 0; i < Math.round(range / 2); i += 1) {
    yearsBefore.push(year + i);
  }
  for (let i = Math.round(range / 2); i <= range; i += 1) {
    yearsAfter.push(year + i);
  }
  return [...yearsAfter, ...yearsBefore];
});
</script>

<template>
  <Carousel
    :value="yearsList"
    circular
    :show-indicators="false"
    :pt-options="{ mergeProps: true }"
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
