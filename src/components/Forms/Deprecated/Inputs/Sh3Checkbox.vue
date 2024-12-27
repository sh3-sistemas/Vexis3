<script setup lang="ts">
import { type PropType, ref } from "vue";
import { Checkbox } from "primevue";
import { twMerge } from "tailwind-merge";

type CheckboxStyle = {
  root: string;
  indicator: string;
  label: string;
};

const props = defineProps({
  label: {
    type: String,
  },
  value: {
    type: String,
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
        inputId="ingredient1"
        :name="label"
        :defaultValue="initialValue"
        binary
        @update:modelValue="(checked: boolean) => emits('checked', checked)"
        :class="
          twMerge(
            ' flex h-[18px] w-[18px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none border border-gray-400',
            styles.root,
          )
        "
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
