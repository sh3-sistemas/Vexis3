<template>
  <div
    :class="
      twMerge(
        'title-container inline-flex text-lg text-surface-950',
        highlightStyle.main
      )
    "
  >
    <span class="pr-1"> {{ highlightText.title }} </span>
    <span :class="twMerge('text-primary-700', highlightStyle.name)">
      {{ highlightText.name }}
    </span>
    <span> {{ highlightText.extra }} </span>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { HightlightTitleProps } from "./types";

withDefaults(defineProps<HightlightTitleProps>(), {
  highlightText: () => {
    return {
      title: "Olá,",
      name: "Fernando",
      extra: "!",
    };
  },
  highlightStyle: () => {
    return {
      main: "",
      name: "",
    };
  },
});
</script>
