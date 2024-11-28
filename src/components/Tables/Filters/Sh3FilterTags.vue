<template>
  <div class="sh3-filter-tag flex items-center gap-x-1">
    <div class="sh3-filter-tag--title font-bold">Filtros aplicados:</div>
    <div class="tags-wrapper flex gap-x-1">
      <Tag
        v-for="{ field, icon, value } in filters"
        :key="field"
        :icon="icon ?? ''"
        rounded
      >
        <div class="tag-template-wrapper whitespace-nowrap flex">
          <div class="tag-template-wrapper--field mr-1">{{ field }}:</div>
          <div class="tag-template-wrapper--value font-normal">
            {{ Array.isArray(value) ? value.join(", ") : value }}
          </div>
        </div>
      </Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "primevue/tag";

type FilterTag = {
  field: string;
  icon: string;
  value: string | Array<string>;
};

interface Sh3FilterTagProps {
  title: boolean;
  filters: Array<FilterTag>;
}

withDefaults(defineProps<Sh3FilterTagProps>(), {
  title: true,
  filters: () => [],
});
</script>
