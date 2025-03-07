<template>
  <span
    :class="twMerge('inline-flex text-mercury-950 text-base uppercase', style)"
  >
    {{ title }}
  </span>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

defineProps({
  title: {
    type: String,
    default: "",
  },
  style: {
    type: String,
    default: "",
  },
});
</script>
