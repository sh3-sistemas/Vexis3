<template>
  <div class="autocomplete-search-wrapper inline-flex items-center">
    <Icon
      icon="ion:search-outline"
      class="w-4.5 h-auto relative z-10 -right-[28px] text-surface-500 bg-white py-1"
    />
    <AutoComplete
      v-model="value"
      class="inputSearch !border-none"
      :suggestions="filtered"
      @complete="search"
      placeholder="Pesquisar"
      v-bind="$attrs"
    >
      <template v-for="(_, slot) in slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope || {}"></slot>
      </template>
    </AutoComplete>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import AutoComplete, { type AutoCompleteSlots } from "primevue/autocomplete";
import { FilterMatchMode, FilterService } from "@primevue/core/api";
import { ref, toRef, useAttrs, useSlots } from "vue";

interface Sh3AutoCompleteItem {
  name: string;
}

export interface Sh3AutoCompleteProps {
  items: Array<Sh3AutoCompleteItem>;
  optionFilter: "filter";
}

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
const slots = useSlots() as unknown as AutoCompleteSlots;

const props = defineProps({
  items: {
    type: Array<Sh3AutoCompleteItem>,
    default: () => [],
  },
  optionFilter: {
    type: String,
    default: "filter",
  },
});

const suggestions = toRef(props, "items");
const filtered = ref();
const value = ref();

const handleSuggestion = (suggestion: Sh3AutoCompleteItem) => {
  if (!attrs["option-group-children"]) return [suggestion];

  const newSuggestion = [
    suggestion,
    ...suggestion[attrs["option-group-children"] as keyof Sh3AutoCompleteItem],
  ];
  return newSuggestion.flat(1);
};

const search = (event: any) => {
  const query = event.query;
  let newFiltered: any[] = [];

  for (const suggestion of suggestions.value satisfies Array<Sh3AutoCompleteItem>) {
    const filteredItems = FilterService.filter(
      handleSuggestion(suggestion),
      [props.optionFilter],
      query,
      FilterMatchMode.CONTAINS
    );

    if (filteredItems && filteredItems.length) {
      newFiltered = [...newFiltered, ...filteredItems];
    }
  }

  filtered.value = newFiltered;
};
</script>

<style>
.inputSearch input {
  text-indent: 20px;
}
</style>
