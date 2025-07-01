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
    :pt-options="{ mergeProps: true }"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import InputNumber, { type InputNumberProps } from "primevue/inputnumber";
import { type PresetsType } from "../inputFormat";
import type { PresetKeyNumber, TableInputNumberProps } from "./type";

withDefaults(defineProps<TableInputNumberProps>(), {});

const presets = <PresetsType<PresetKeyNumber, InputNumberProps>>{
  currency: { prefix: "R$ ", minFractionDigits: 2 },
  percentage: { suffix: " %" },
};
</script>
