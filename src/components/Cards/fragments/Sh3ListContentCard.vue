<template>
  <div :class="twMerge('flex flex-col gap-y-2 mx-2', cardStyle)">
    <span v-if="title">{{ title }}</span>
    <span class="justify-self-start font-bold">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import type { Sh3ListContentCardProps } from "../types";

withDefaults(defineProps<Sh3ListContentCardProps>(), {
  cardStyle: "bg-white",
  title: "",
});
</script>
