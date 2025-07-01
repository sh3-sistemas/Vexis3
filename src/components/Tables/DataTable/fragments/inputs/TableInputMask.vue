<template>
  <InputMask
    :mask="preset ? presets[preset].mask : undefined"
    :placeholder="
      preset && edit ? presets[preset].mask?.replace(/9/g, '_') : undefined
    "
    unmask
    :readonly="!edit"
    :class="edit ? '' : '!border-none !shadow-none !bg-transparent'"
    :pt-options="{ mergeProps: true }"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import InputMask, { type InputMaskProps } from "primevue/inputmask";
import type { PresetKeyMask, TableInputMaskProps, PresetsType } from "../types";

defineOptions({
  inheritAttrs: false,
});

defineProps<TableInputMaskProps>();

const presets = <PresetsType<PresetKeyMask, InputMaskProps>>{
  cpf: { mask: "999.999.999-99" },
  cnpj: { mask: "99.999.999/9999-99" },
  tel: { mask: "(99) 9999-9999" },
  cel: { mask: "(99) 9 9999-9999" },
  cep: { mask: "99999-999" },
};
</script>
