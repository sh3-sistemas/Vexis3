<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import Sh3IconButton from "@/components/Buttons/Sh3IconButton.vue";
import { cn } from "@/utils/cn";
import { useSidebar } from "./utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { toggleSidebar, open } = useSidebar();
</script>

<template>
  <Sh3IconButton
    :class="
      cn(
        '!w-7 !h-7 shrink-0 mt-16 -ml-2.5 !absolute z-20 !bg-mercury-300 !hover:bg-mercury-400 !active:bg-primary-300 !shadow !ring-0 !ring-transparent',
        props.class,
      )
    "
    severity="secondary"
    :icon="{
      name: open ? 'majesticons:chevron-left' : 'majesticons:chevron-right',
      styling: 'w-5 h-auto text-white',
    }"
    rounded
    @click="toggleSidebar()"
  />
</template>
