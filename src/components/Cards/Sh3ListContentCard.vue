<template>
  <div :class="twMerge('flex mx-2 rounded-[10px]', cardStyle)">
    <div>
      <div v-if="title">{{ title }}</div>
      <div class="justify-self-start font-bold">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import type { Sh3ListContentCardProps } from "./types";

withDefaults(defineProps<Sh3ListContentCardProps>(), {
  cardStyle: "bg-white",
  title: "",
});
</script>
