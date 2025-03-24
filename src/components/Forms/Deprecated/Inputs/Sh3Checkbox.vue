<script setup lang="ts">
import { type PropType, ref } from "vue";
import Checkbox from "primevue/checkbox";
import { twMerge } from "tailwind-merge";

type CheckboxStyle = {
  root: string;
  indicator: string;
  label: string;
};

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  initialValue: {
    type: Boolean,
    default: false,
  },
  styles: {
    type: Object as PropType<CheckboxStyle>,
    default: () => {
      return {
        root: "",
        indicator: "",
        label: "",
      } as CheckboxStyle;
    },
  },
});

const checkbox = ref(props.initialValue);
const emits = defineEmits(["checked"]);
</script>

<template>
  <div class="checkbox-wrapper flex flex-col gap-2.5">
    <label
      class="flex flex-row gap-2 items-center justify-start [&>.checkbox]:hover:bg-neutral-100"
    >
      <Checkbox
        v-model="checkbox"
        input-id="ingredient1"
        :name="label"
        :default-value="initialValue"
        binary
        :class="
          twMerge(
            ' flex h-[18px] w-[18px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none border border-gray-400',
            styles.root,
          )
        "
        @update:model-value="(checked: boolean) => emits('checked', checked)"
      />
      <span :class="twMerge('select-none text-sm', styles.label)">{{
        label
      }}</span>
    </label>
  </div>
</template>

<style scoped>
:deep(.checkbox-wrapper label input) {
  position: relative !important;
  margin-left: -20px !important;
}
</style>
