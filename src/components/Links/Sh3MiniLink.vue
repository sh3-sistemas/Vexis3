<template>
  <RouterLink
    :to="config.route == '' ? '/' : config.route"
    :class="
      twMerge(
        'text-xs underline underline-offset-2 text-gray-700 hover:text-gray-500',
        addStyle,
        config.style,
      )
    "
  >
    {{ config.label }}
  </RouterLink>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import { twMerge } from "tailwind-merge";

type MiniLinkConfig = {
  route: string;
  label: string;
  style?: string;
};

defineProps({
  config: {
    type: Object as PropType<MiniLinkConfig>,
    default: () => {
      return {
        route: "/",
        label: "",
        style: "",
      };
    },
  },
  addStyle: {
    type: String,
    default: "",
  },
});
</script>
