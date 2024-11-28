<template>
  <div
    :class="
      twMerge(
        'dp-tag inline-flex flex-nowrap h-fit py-1 px-3.5 rounded-full items-center justify-center gap-2.5',
        tagColor
      )
    "
  >
    <img src="@/assets/images/logos/mono_neg_avatar.svg" class="w-3.5 h-auto" />
    <span
      class="dp-tag-label uppercase whitespace-nowrap text-white text-xs tracking-wide"
    >
      {{ tagLabel }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useVariation } from "./useVariation";
import { twMerge } from "tailwind-merge";

const props = defineProps({
  tagVariation: {
    type: String,
    default: "pessoal",
  },
});

const { tagColor, tagLabel } = useVariation(props.tagVariation);
</script>
