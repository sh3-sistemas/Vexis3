<template>
  <Sh3Accordion v-slot="{ item }" :items="items">
    <div class="links-wrapper w-full flex flex-col py-1 gap-1">
      <span
        v-for="(link, i) in item.links"
        :key="i"
        class="links w-full py-2 px-4 inline-flex justify-start gap-3 items-center rounded-sm hover:bg-mercury-100 active:bg-copper-100/60 pointer-events-auto cursor-pointer"
      >
        <Sh3CardTag :tag-variation="link.tag" />
        <div class="AccordionContentText text-sm text-mercury-900">
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
