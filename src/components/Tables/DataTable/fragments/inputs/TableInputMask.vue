<template>
  <InputMask
    :mask="preset ? presets[preset.toLowerCase()].mask : undefined"
    :placeholder="
      preset && edit
        ? presets[preset.toLowerCase()].mask?.replace(/9/g, '_')
        : undefined
    "
    unmask
    :readonly="!edit"
    :class="edit ? '' : '!border-none !shadow-none !bg-transparent'"
  />
</template>

<script setup lang="ts">
import InputMask, { type InputMaskProps } from "primevue/inputmask";

export type TableInputMaskProps = {
  edit: boolean;
  preset?: null | string;
};
defineProps<TableInputMaskProps>();

type presetsType = { [key: string]: InputMaskProps };
const presets = <presetsType>{
  cpf: { mask: "999.999.999-99" },
  cnpj: { mask: "99.999.999/9999-99" },
  tel: { mask: "(99) 9999-9999" },
  cel: { mask: "(99) 9 9999-9999" },
  cep: { mask: "99999-999" },
};
</script>
