<template>
  <Button
    :pt-options="{ mergeProps: true }"
    class="w-[40px] h-[40px]"
    v-bind="$attrs"
  >
    <template #icon>
      <slot>
        <Icon
          :icon="icon.name"
          :class="twMerge('w-5 h-auto text-white', icon.styling)"
        />
      </slot>
    </template>
  </Button>
</template>

<script lang="ts" setup>
import Button from "primevue/button";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";
import type { Sh3IconButtonProps } from "./types";

defineOptions({
  inheritAttrs: false,
});

defineProps<Sh3IconButtonProps>();
</script>
