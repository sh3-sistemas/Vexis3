<template>
  <div
    :class="
      twMerge(
        'text-center content-center rounded-xl bg-primary-50',
        styling?.container,
      )
    "
  >
    <i :class="twMerge('pi pi-spin pi-spinner', styling?.icon)" />
    <p :class="twMerge(styling?.text)">
      {{ subText }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
export type Sh3LoadingProps = {
  styling?: {
    container?: string;
    icon?: string;
    text?: string;
  };
  subText?: string;
};
defineProps<Sh3LoadingProps>();
</script>
