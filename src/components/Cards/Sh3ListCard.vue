<template>
  <div
    :class="
      twMerge(
        'flex lg:flex-row flex-col py-2 px-12 lg:px-4 gap-y-3 rounded-[10px] border justify-evenly items-center',
        cardStyle,
      )
    "
  >
    <slot />
    <div
      v-if="$slots.actions"
      class="flex lg:flex-row flex-col w-full lg:w-fit lg:h-full place-items-center"
    >
      <Sh3Divider layout="horizontal" class="lg:hidden" />
      <Sh3Divider layout="vertical" class="h-max hidden lg:block" />
      <div class="flex shrink-0 text-nowrap gap-x-2">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import type { Sh3ListCardProps } from "./types";
import Sh3Divider from "@/components/Typography/Sh3Divider.vue";

withDefaults(defineProps<Sh3ListCardProps>(), {
  cardStyle: "bg-white",
});
</script>
