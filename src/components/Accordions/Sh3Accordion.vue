<template>
  <Accordion
    :value="items.length > 0 ? 0 : ''"
    :class="twMerge('AccordionRoot space-y-2 pr-2 scroll-smooth', style.root)"
    :multiple="false"
  >
    <AccordionPanel
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      class="AccordionItem"
    >
      <AccordionHeader
        class="flex !font-normal !text-mercury-900 bg-mercury-50"
      >
        {{ item.title }}
      </AccordionHeader>
      <AccordionContent class="overflow-hidden flex flex-row">
        <slot :item="item"></slot>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

import { twMerge } from "tailwind-merge";
import type { PropType } from "vue";

type AccordionStyle = {
  root: string;
  trigger: string;
  chevron: string;
};

defineProps({
  items: {
    type: Array<Record<string, any>>,
    default: () => [],
  },
  style: {
    type: Object as PropType<AccordionStyle>,
    default: () => {
      return {
        root: "",
        trigger: "",
        chevron: "",
      };
    },
  },
});
</script>
