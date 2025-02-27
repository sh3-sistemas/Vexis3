<template>
  <div class="text-center content-center rounded-xl bg-selenium-50">
    <i :class="twMerge('pi pi-spin pi-spinner', iconStyle)" />
    <p :class="twMerge(textStyle)">
      {{ subText }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
export type Sh3LoadingProps = {
  iconStyle?: string;
  subText?: string;
  textStyle?: string;
};
defineProps<Sh3LoadingProps>();
</script>
