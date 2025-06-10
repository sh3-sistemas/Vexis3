<script setup lang="ts">
import Sh3IconButton from "@/components/Buttons/Sh3IconButton.vue";
import { useSidebar } from "./utils";

const { toggleSidebar, open } = useSidebar();
</script>

<template>
  <Sh3IconButton
    :pt="{
      root: '!size-7 shrink-0 mt-16 -ml-2.5 !absolute z-20 bg-mercury-300 hover:bg-mercury-400 active:bg-mercury-200 shadow !ring-0',
    }"
    severity="secondary"
    :icon="{
      name: open ? 'majesticons:chevron-left' : 'majesticons:chevron-right',
      styling: 'w-5 h-auto text-white',
    }"
    rounded
    @click="toggleSidebar()"
  />
</template>
