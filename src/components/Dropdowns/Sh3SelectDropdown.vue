<template>
  <div class="card flex justify-center">
    <Select
      v-model="selectedOption"
      @show="isSelectOpen = true"
      @hide="isSelectOpen = false"
      optionLabel="name"
      :ptOptions="{ mergeProps: true }"
      :options="options"
      class="w-[calc(100vw-70px)] md:!w-[450px]"
      v-bind="$attrs"
    >
      <template #dropdownicon>
        <Icon
          :icon="
            isSelectOpen ? 'majesticons:chevron-up' : 'majesticons:chevron-down'
          "
          class="w-5 h-auto"
        />
      </template>
      <template #value="{ placeholder, value }">
        <div class="placeholder w-full inline-flex gap-2 items-center">
          <div class="placeholder--icon">
            <slot name="placeholderIcon">
              <Icon icon="ph:cat-light" class="w-5 h-auto text-surface-800"
            /></slot>
          </div>
          <span
            v-if="showValue"
            :title="value != undefined ? value.name : value"
            class="placeholder--value grow text-center truncate"
            >{{ value != undefined ? value.name : value }}</span
          >
          <span v-else class="placeholder--label grow text-center">{{
            placeholder
          }}</span>
        </div>
      </template>

      <template #option="{ option }">
        <div @click="showValue = true" class="option-group">
          {{ option.name }} <span v-if="option.code">({{ option.code }})</span>
        </div>
      </template>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef } from "vue";
import { Icon } from "@iconify/vue";
import Select from "primevue/select";

type Option = {
  name: string;
  code: string;
};
const isSelectOpen = ref(false);
const showValue = ref(false);

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  item: {
    type: Array<Option>,
    default: () => {
      return [];
    },
  },
});

const selectedOption = ref();
const options = toRef(props, "item");
</script>
