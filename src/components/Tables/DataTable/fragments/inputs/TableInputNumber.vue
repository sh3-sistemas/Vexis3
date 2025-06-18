<template>
  <InputNumber
    :prefix="preset ? presets[preset].prefix : undefined"
    :suffix="preset ? presets[preset].suffix : undefined"
    :min-fraction-digits="
      preset ? presets[preset].minFractionDigits : undefined
    "
    :format="!!preset"
    :readonly="!edit"
    :input-class="edit ? '' : '!border-none !shadow-none !bg-transparent'"
  />
</template>

<script setup lang="ts">
import InputNumber, { type InputNumberProps } from "primevue/inputnumber";

export type TableInputNumberProps = {
  edit: boolean;
  preset?: null | "currency" | "percentage";
};
defineProps<TableInputNumberProps>();

type presetsType = { [key: string]: InputNumberProps };
const presets = <presetsType>{
  currency: { prefix: "R$ ", minFractionDigits: 2 },
  percentage: { suffix: " %" },
};
</script>
