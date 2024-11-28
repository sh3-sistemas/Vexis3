<template>
  <button
    :class="
      twMerge(
        'notice flex flex-row p-3 rounded-md min-h-[70px] items-center gap-4 bg-pink-50 hover:bg-pink-200/40',
        cardStyle
      )
    "
  >
    <div
      :class="
        twMerge(
          'notice-icon rounded-full flex items-center justify-center bg-pink-200 p-3',
          circleStyle
        )
      "
    >
      <Icon
        :icon="iconVariation"
        width="30px"
        height="30px"
        :color="iconColor"
      />
    </div>
    <div class="notice-text grow flex flex-wrap flex-col items-start gap-1">
      <span class="notice-text-title font-semibold text-sm">{{
        noticeCard.title
      }}</span>
      <span class="notice-text-content text-sm text-left">
        {{ noticeCard.text }}
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useVariation } from "./composables";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";
import type { Sh3NoticeCardProps } from "./types";

const props = withDefaults(defineProps<Sh3NoticeCardProps>(), {
  noticeCard: () => {
    return {
      variation: "alert",
      title: "",
      text: "",
    };
  },
});

const { cardStyle, circleStyle, iconVariation, iconColor } = useVariation(
  props.noticeCard.variation
);
</script>
