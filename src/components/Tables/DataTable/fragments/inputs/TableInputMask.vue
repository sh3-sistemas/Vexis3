<template>
  <InputMask
    ref="mask"
    :default-value="value"
    :mask="dynamicMask"
    :placeholder="
      edit ? dynamicMask?.split('?')[0].replace(/a|9|\*/g, '_') : undefined
    "
    unmask
    :readonly="!edit"
    :class="edit ? '' : '!border-none !shadow-none !bg-transparent'"
    :auto-clear="!edit"
    :pt-options="{ mergeProps: true }"
    v-bind="$attrs"
    @value-change="(value) => $parent?.$emit('change', value)"
  />
</template>

<script setup lang="ts">
import InputMask, { type InputMaskProps } from "primevue/inputmask";
import type { PresetKeyMask, TableInputMaskProps, PresetsType } from "../types";
import { computed, useTemplateRef } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<TableInputMaskProps>();

const presets = <PresetsType<PresetKeyMask, InputMaskProps>>{
  cpf: { mask: "999.999.999-99" },
  cnpj: { mask: "99.999.999/9999-99" },
  tel: { mask: "(99) 9999-9999" },
  cel: { mask: "(99) 9 9999-9999" },
  cep: { mask: "99999-999" },
};

const maskComponente = useTemplateRef<any>("mask");

const getMask = (mask: string[]): string => {
  const index = mask.findIndex((x) => {
    //Count only valid characters
    const maskCount = x.match(/a|9|\*/g)?.length;

    return (maskCount ?? 0) >= (props.value?.length ?? 0);
  });

  if (index < mask.length - 1) {
    const newMask = mask[index] + "?*";

    //Adjust visual mask on typing
    if (maskComponente.value?.buffer.length > mask[index].length) {
      maskComponente.value?.buffer.pop();
    }

    return newMask;
  }

  return mask[index];
};

const dynamicMask = computed(() => {
  if (props.preset) return presets[props.preset].mask;

  if (props.mask) {
    return Array.isArray(props.mask) ? getMask(props.mask) : props.mask;
  }

  return undefined;
});
</script>
