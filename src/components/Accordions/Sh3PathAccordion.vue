<template>
  <Sh3Accordion :items="items" v-slot="{ item }">
    <div class="links-wrapper w-full flex flex-col py-1 gap-1">
      <span
        class="links w-full py-2 px-4 inline-flex justify-start gap-3 items-center rounded-sm hover:bg-surface-100 active:bg-copper-100/60 pointer-events-auto cursor-pointer"
        v-for="(link, i) in item.links"
        v-bind:key="i"
      >
        <Sh3CardTag :tagVariation="link.tag" />
        <div class="AccordionContentText text-sm text-surface-900">
          {{ link.path }}
        </div>
      </span>
    </div>
  </Sh3Accordion>
</template>

<script setup lang="ts">
import Sh3Accordion from "./Sh3Accordion.vue";
import Sh3CardTag from "../Cards/fragments/Sh3CardTag.vue";
import type { Sh3PathAccordionProps } from "./types";

withDefaults(defineProps<Sh3PathAccordionProps>(), {
  items: () => [],
});
</script>
