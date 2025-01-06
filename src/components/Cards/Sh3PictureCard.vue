<template>
  <button
    :title="pictureCard.label"
    @click="pictureCard.onClick(pictureCard.params ? pictureCard.params : {})"
    :class="
      twMerge(
        'picture-card--container shrink-0 w-40 h-[105px] pt-2 gap-2 flex flex-col items-center justify-between overflow-hidden rounded-xl border border-primary-400 hover:opacity-80',
        pictureCardStyle.card,
      )
    "
  >
    <div class="picture-card--img-container h-[60%] flex items-center">
      <img
        :src="pictureCard.image"
        :class="twMerge('w-12 h-auto', pictureCardStyle.image)"
      />
    </div>
    <div
      :class="
        twMerge(
          'picture-card--label-container px-4 py-2 w-full bg-primary-400 rounded-b-xl text-white text-xs whitespace-nowrap truncate',
          pictureCardStyle.label,
        )
      "
    >
      {{ pictureCard.label }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { Sh3PictureCardProps } from "./types";

withDefaults(defineProps<Sh3PictureCardProps>(), {
  pictureCard: () => {
    return {
      image: "",
      label: "",
      params: () => {},
      onClick: () => {},
    };
  },
  pictureCardStyle: () => {
    return {
      card: "",
      label: "",
      image: "",
    };
  },
});
</script>
