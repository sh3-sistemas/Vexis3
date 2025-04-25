<script setup lang="ts">
import { DialogUtils, useConfirm } from "@/components/Dialogs";
import type { Sh3GenericFormProps } from "@/components/Forms";
import type { Vueform } from "@vueform/vueform";
import { ref, useTemplateRef, defineEmits, onMounted, reactive } from "vue";

import { Form } from "@primevue/forms";
import { useSlots } from "vue";
import Sh3FormSkeleton from "../fragments/Sh3FormSkeleton.vue";
import { zodResolver } from "@primevue/forms/resolvers/zod";

const slots = useSlots();

defineOptions({
  inheritAttrs: false,
});

const {
  submitForm,
  deleteRegister,
  options = {
    crud: {
      cancel: true,
      delete: false,
      save: false,
    },
  },
  loading = false,
  resolver = () => {
    return { errors: {}, values: {} };
  },
} = defineProps<Sh3GenericFormProps>();

type FormInstanceType = InstanceType<typeof Form>;
const formRef = useTemplateRef<FormInstanceType | null>("form");

const confirm = useConfirm();
const form$ = ref<Vueform>();
const emits = defineEmits<{
  setup: [form$: any];
  cancel: [form$: typeof form$ | any];
}>();

const syncForm = (data: any) =>
  form$.value ? form$.value.load({ ...data }, true) : null;
const clearForm = () => (form$.value ? form$.value.reset() : null);
const deletion = () => {
  const template = DialogUtils.deletionDialogBase({
    reject: () => {},
    accept: () => {
      deleteRegister();
    },
  });
  confirm.require(template);
};

onMounted(() => {
  emits("setup", formRef);
  console.log(resolver);
});

defineExpose({ clearForm, deletion, syncForm, primeForm: formRef });
</script>

<template>
  <Form
    ref="form"
    v-slot="formScope"
    v-bind="$attrs"
    :resolver="zodResolver(resolver)"
    :initial-values="initialValues"
    validate-on-value-update
    validate-on-blur
    :pt="{ root: 'h-[calc(100%-100px)]' }"
    :pt-options="{ mergeProps: true }"
    @submit="submitForm"
  >
    <!-- Slot default -->
    <slot v-bind="formScope" />

    <!-- Slots nomeados -->
    <template v-for="(_, slotName) in slots" :key="slotName">
      <template v-if="slotName !== 'default'">
        <template v-if="slotName === 'form'">
          <div
            v-if="!loading"
            class="card grid md:grid-cols-12 grid-cols-2 gap-4 w-full"
          >
            <slot :name="slotName" v-bind="formScope" />
          </div>
          <Sh3FormSkeleton v-else />
        </template>
        <template v-else>
          <slot :name="slotName" v-bind="formScope" />
        </template>
      </template>
    </template>

    <div class="crud-actions flex justify-between flex gap-x-2 my-2">
      <Sh3Button
        v-if="options.crud.delete"
        severity="danger"
        :disabled="loading"
        outlined
        label="Excluir"
        @click="deletion"
      />

      <div class="save-and-cancel flex gap-x-2">
        <Sh3Button
          v-if="options.crud.cancel"
          severity="warning"
          outlined
          label="Cancelar"
        />
        <Sh3Button
          severity="success"
          :loading="loading"
          label="Salvar"
          type="submit"
        />
      </div>
    </div>
  </Form>
</template>
