<template>
  <Form v-slot="{ handleSubmit, resetForm }" @submit="onSubmit" id="zodForm">
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
              :validate-on-input="false"
              :id="name"
              :name="name"
              v-bind="attrs"
              v-slot="{ field }"
            >
              <Sh3Input
                v-if="as !== 'select'"
                :type="type"
                :label="label"
                :placeholder="placeholder"
                :validateSuccess="validateSuccess"
                :disabled="disabled"
                :success-message="successMessage"
                :variation="variation"
                v-bind="field"
                :inputType="inputType"
                :size="size"
              />
              <Sh3Select
                v-if="as == 'select'"
                :type="type"
                :label="label"
                :placeholder="placeholder"
                :validateSuccess="validateSuccess"
                :disabled="disabled"
                :success-message="successMessage"
                :variation="variation"
                v-bind="field"
                :inputType="inputType"
                :options="options"
                :size="size"
                :config="config"
                @selectChange="(e) => emits('selectChange', e)"
              />

              <template v-if="children && children.length">
                <component
                  v-for="({ tag, text, ...childAttrs }, idx) in children"
                  :key="idx"
                  :is="tag"
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
  emits("submittedForm", {...values});
};
</script>
