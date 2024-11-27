<template>
  <span :class="twMerge('font-bold text-black text-lg', addStyle)">
    {{ title }}
  </span>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

defineProps({
  title: {
    type: String,
    default: "Acesse sua conta",
  },
  addStyle: {
    type: String,
    default: "",
  },
});
</script>
