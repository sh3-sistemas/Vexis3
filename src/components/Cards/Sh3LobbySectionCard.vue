<template>
  <div class="lobby-container flex flex-col gap-2">
    <SectionTitle :title="title" :class="titleStyle" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { SectionTitle } from "../Typography";
import type { Sh3LobbySectionCardProps } from "./types";

defineProps<Sh3LobbySectionCardProps>();
</script>
