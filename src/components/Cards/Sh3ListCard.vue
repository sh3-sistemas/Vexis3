<template>
  <div
    :class="
      twMerge(
        'flex p-2 rounded-[10px] border justify-evenly items-center',
        cardStyle,
      )
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import type { Sh3ListCardProps } from "./types";

withDefaults(defineProps<Sh3ListCardProps>(), {
  cardStyle: "bg-white",
});
</script>
