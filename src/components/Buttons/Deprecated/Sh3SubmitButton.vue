<template>
  <button
    :form="submitButton.form"
    :class="
      twMerge(
        'h-[55px] w-full py-5 inline-flex justify-center items-center gap-2.5 rounded-lg  text-white bg-blue-800 hover:bg-blue-700 active:bg-blue-500',
        submitButton.addStyle
      )
    "
  >
    {{ submitButton.label }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { twMerge } from "tailwind-merge";

export type SubmitButton = {
  form: string;
  addStyle: string;
  label: string;
};

defineProps({
  submitButton: {
    type: Object as PropType<SubmitButton>,
    default: () => {
      return {
        form: "",
        addStyle: "",
        label: "",
      };
    },
  },
});
</script>
