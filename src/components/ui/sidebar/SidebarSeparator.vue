<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('mx-2 w-auto bg-white-border', props.class)"
  >
    <slot />
  </Separator>
</template>
