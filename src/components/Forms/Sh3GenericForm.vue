<template>
  <Vueform
    ref="form$"
    size="md"
    :format-load
    :display-errors="false"
    :endpoint="false"
    :disabled="!options.crud.save"
    :add-classes="{
      ObjectElement: { container: 'bg-mercury-50 my-1.5 p-3 rounded-md' },
      TextElement: {
        input: 'read-only:bg-mercury-50 read-only:text-mercury-800',
      },
      TextareaElement: {
        input: 'read-only:bg-mercury-50 read-only:text-mercury-800',
      },
      ...(!options.crud.edit ? disableAll : {}),
    }"
    v-bind="$attrs"
    @submit="submitForm"
  >
    <slot name="form" :form="form$"></slot>
    <GroupElement
      name="actionButtons"
      :columns="12"
      style="padding-top: 15px"
      override-class="bg-transparent"
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
        :columns="{ default: 3, lg: 2, '2xl': 1 }"
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
        :container-class="
          options.crud.cancel
            ? 'lg:col-start-7 2xl:col-start-10'
            : 'lg:col-start-9 2xl:col-start-11'
        "
        button-label="Editar"
        :columns="{ default: 3, lg: 2, '2xl': 1 }"
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
        :container-class="
          '2xl:col-start-11 ' +
          (options.crud.edit ? 'col-start-7 lg:col-start-9' : '')
        "
        button-label="Cancelar"
        :columns="{ default: 3, lg: 2, '2xl': 1 }"
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
          '2xl:col-start-12 ' +
          (options.crud.edit
            ? 'col-start-10 lg:col-start-11'
            : 'cursor-not-allowed')
        "
        button-label="Salvar"
        :columns="{ default: 3, lg: 2, '2xl': 1 }"
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
const cleanForm = () => form$.value?.clean();
const deletion = (form?: any) => {
  const deleteProps = props.deleteProps ? props.deleteProps(form?.data) : {};

  const template = DialogUtils.deletionDialogBase({
    reject: () => {},
    accept: () => {
      props.deleteRegister(form?.data);
    },
    ...deleteProps,
  });
  confirm.require(template);
};

const disableAll = {
  CheckboxElement: {
    container: "pointer-events-none",
    input: "opacity-50 form-bg-disabled",
  },
  DateElement: {
    container: "pointer-events-none",
    inputContainer: "form-bg-disabled",
    input: "form-bg-disabled",
  },
  ObjectElement: {
    container: "border border-mercury-200 my-1.5 p-3 rounded-md",
  },
  SelectElement: {
    container: "pointer-events-none",
    input: "form-bg-disabled",
  },
  TextareaElement: {
    container: "pointer-events-none",
    inputContainer: "form-bg-disabled",
  },
  TextElement: {
    container: "pointer-events-none",
    inputContainer: "form-bg-disabled",
  },
  RadioElement: {
    wrapper: "pointer-events-none",
    input: "opacity-50 form-bg-disabled",
  },
  RadiogroupElement: { wrapper: "opacity-50 pointer-events-none" },
  MatrixElement: {
    grid: "bg-mercury-50",
    cell: "!pb-0",
    rowRemove: "!form-bg-disabled mt-1",
    remove: "pointer-events-none",
  },
};

provide(
  "formDisabled",
  toRef(() => !props.options.crud.edit || props.options.crud.disabled),
);

onMounted(() => emits("setup", form$));
defineExpose({ cleanForm, clearForm, deletion, syncForm });
</script>
