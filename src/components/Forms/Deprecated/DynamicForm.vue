<template>
  <Form id="zodForm" v-slot="{ handleSubmit, resetForm }" @submit="onSubmit">
    <form
      :id="formId"
      @submit="
        async ($event) => {
          await handleSubmit($event, onSubmit);
          resetFormAfterSubmit ? resetForm() : null;
        }
      "
    >
      <div :class="twMerge('grid grid-cols-10 gap-6', styling)">
        <template
          v-for="{
            name,
            label,
            variation,
            type,
            children,
            options,
            placeholder,
            validateSuccess,
            successMessage,
            size,
            disabled,
            colPlacement,
            inputType,
            as,
            config,
            ...attrs
          } in refSchema.fields"
          :key="name"
        >
          <div :class="colPlacement">
            <Field
              :id="name"
              v-slot="{ field }"
              :validate-on-input="false"
              :name="name"
              v-bind="attrs"
            >
              <Sh3Input
                v-if="as !== 'select'"
                :type="type"
                :label="label"
                :placeholder="placeholder"
                :validate-success="validateSuccess"
                :disabled="disabled"
                :success-message="successMessage"
                :variation="variation"
                v-bind="field"
                :input-type="inputType"
                :size="size"
              />
              <Sh3Select
                v-if="as == 'select'"
                :type="type"
                :label="label"
                :placeholder="placeholder"
                :validate-success="validateSuccess"
                :disabled="disabled"
                :success-message="successMessage"
                :variation="variation"
                v-bind="field"
                :input-type="inputType"
                :options="options"
                :size="size"
                :config="config"
                @select-change="(e) => emits('selectChange', e)"
              />

              <template v-if="children && children.length">
                <component
                  :is="tag"
                  v-for="({ tag, text, ...childAttrs }, idx) in children"
                  :key="idx"
                  v-bind="childAttrs"
                >
                  {{ text }}
                </component>
              </template>
            </Field>
          </div>
        </template>
      </div>
    </form>
  </Form>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import { twMerge } from "tailwind-merge";
import { Form, Field, configure } from "vee-validate";
import type { Schema } from "./constants";
import Sh3Select from "./Sh3Select.vue";

const props = defineProps<{
  formId: string;
  styling: string;
  schema: Schema;
  validationSchema: object;
  resetFormAfterSubmit: boolean;
}>();

type ValueOfFieldSchema = { [key: string]: string };

const refSchema = toRef(props, "schema");

configure({
  validateOnInput: false,
});

const emits = defineEmits(["submittedForm", "selectChange"]);
const onSubmit = (values: ValueOfFieldSchema) => {
  emits("submittedForm", { ...values });
};
</script>
