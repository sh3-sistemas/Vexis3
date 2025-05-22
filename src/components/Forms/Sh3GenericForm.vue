<template>
  <Vueform
    ref="form$"
    size="md"
    :display-errors="false"
    :endpoint="false"
    :disabled="!options.crud.save"
    :add-classes="{
      ObjectElement: { container: 'bg-mercury-50 p-3' },
      ...(!options.crud.edit ? disableAll : {}),
    }"
    v-bind="$attrs"
    @submit="submitForm"
  >
    <slot name="form" :form="form$"></slot>
    <GroupElement
      name="actionButtons"
      :columns="{ container: 12, label: 3, wrapper: 12 }"
      style="padding-top: 15px"
    >
      <Sh3FormButton
        v-if="options.crud.delete"
        v-tooltip.bottom="{
          value: options.crud.disabled ? '' : 'Excluir registro',
          showDelay: 50,
          hideDelay: 50,
        }"
        name="delete"
        severity="danger"
        :container-class="
          'col-start-1' + (options.crud.disabled ? ' cursor-not-allowed' : '')
        "
        button-label="Excluir"
        :columns="1"
        outlined
        full
        :disabled="options.crud.disabled"
        @click="deletion"
      />
      <slot name="actions"></slot>
      <Sh3FormButton
        v-if="!options.crud.edit"
        v-tooltip.bottom="{
          value: 'Habilitar edição',
          showDelay: 50,
          hideDelay: 50,
        }"
        name="edit"
        :container-class="options.crud.cancel ? 'col-start-10' : 'col-start-11'"
        button-label="Editar"
        :columns="1"
        full
        :disabled="options.crud.disabled"
        @click="emits('edit', form$)"
      />
      <Sh3FormButton
        v-if="options.crud.cancel"
        v-tooltip.bottom="{
          value: options.crud.edit ? 'Cancelar edição' : 'Retornar',
          showDelay: 50,
          hideDelay: 50,
        }"
        name="cancel"
        container-class="col-start-11"
        button-label="Cancelar"
        :columns="1"
        outlined
        full
        @click="emits('cancel', form$)"
      />
      <Sh3FormButton
        v-tooltip.bottom="{
          value: options.crud.save ? 'Salvar registro' : '',
          showDelay: 50,
          hideDelay: 50,
        }"
        name="submit"
        severity="success"
        :container-class="
          'col-start-12' + (options.crud.edit ? '' : ' cursor-not-allowed')
        "
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
import { onMounted, provide, toRef } from "vue";
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
        disabled: false,
        edit: false,
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
  edit: [form$: typeof form$ | any];
}>();

const syncForm = (data: any) =>
  form$.value ? form$.value.load({ ...data }, true) : null;
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

const disableAll = {
  TextElement: {
    container: "pointer-events-none",
    inputContainer: "form-bg-disabled",
  },
  TextareaElement: {
    container: "pointer-events-none",
    inputContainer: "form-bg-disabled",
  },
  RadiogroupElement: { wrapper: "opacity-50 pointer-events-none " },
  RadioElement: {
    wrapper: "pointer-events-none",
    input: "opacity-50 form-bg-disabled",
  },
  CheckboxElement: {
    container: "pointer-events-none",
    input: "opacity-50 form-bg-disabled",
  },
};

provide(
  "formDisabled",
  toRef(() => !props.options.crud.edit || props.options.crud.disabled),
);

onMounted(() => emits("setup", form$));
defineExpose({ clearForm, deletion, syncForm });
</script>
