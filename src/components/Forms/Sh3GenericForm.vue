<template>
  <Vueform
    ref="form$"
    size="md"
    :display-errors="false"
    :endpoint="false"
    :disabled="!options.crud.save"
    @submit="submitForm"
    v-bind="$attrs"
  >
    <slot name="form" :form="form$"></slot>
    <GroupElement
      name="actionButtons"
      :columns="{ container: 12, label: 3, wrapper: 12 }"
      style="padding-top: 15px"
    >
      <Sh3FormButton
        v-if="options.crud.delete"
        name="delete"
        severity="danger"
        container-class="col-start-1"
        button-label="Excluir"
        :columns="1"
        outlined
        full
        @click="deletion"
      />
      <slot name="actions"></slot>
      <Sh3FormButton
        v-if="options.crud.cancel"
        name="cancel"
        container-class="col-start-11"
        button-label="Cancelar"
        :columns="1"
        outlined
        full
        @click="emits('cancel', form$)"
      />
      <Sh3FormButton
        name="submit"
        severity="success"
        container-class="col-start-12"
        button-label="Salvar"
        :columns="1"
        full
        submits
      />
    </GroupElement>
  </Vueform>
</template>

<script setup lang="ts">
import type { Vueform } from "@vueform/vueform";
import { onMounted } from "vue";
import { ref, withDefaults } from "vue";
import { useConfirm, DialogUtils } from "../Dialogs";
import type { Sh3GenericFormProps } from "./types";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Sh3GenericFormProps>(), {
  submitForm: () => {},
  deleteRegister: () => {},
  options: () => {
    return {
      crud: {
        cancel: true,
        delete: false,
        save: false,
      },
    };
  },
});

const confirm = useConfirm();
const form$ = ref<Vueform>();
const emits = defineEmits<{
  setup: [form$: typeof form$];
  cancel: [form$: typeof form$ | any];
}>();

const syncForm = (data: any) =>
  form$.value ? form$.value.update({ ...data }) : null;
const clearForm = () => (form$.value ? form$.value.reset() : null);
const deletion = () => {
  const template = DialogUtils.deletionDialogBase({
    reject: () => {},
    accept: () => {
      props.deleteRegister();
    },
  });
  confirm.require(template);
};

onMounted(() => emits("setup", form$));
defineExpose({ clearForm, deletion, syncForm });
</script>
