<template>
  <div class="relative">
    <label :for="name" :class="[labelStyle, labelInputSize]">{{ label }}</label>
    <input
      v-if="inputType == 'input'"
      :validate-on-input="false"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      :class="[inputStyle, inputSize]"
      @input="handleChange"
      @blur="handleBlur"
      :disabled="disabled"
    />

    <textarea
      v-else
      rows="10"
      :validate-on-input="false"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      :class="[inputStyle, inputSize]"
      @input="handleChange"
      @blur="handleBlur"
      :disabled="disabled"
    >
    </textarea>

    <InputSuccessMessage
      :enable="showSuccessMessage"
      :message="successMessage"
    />
    <InputErrorMessage :enable="showErrorMessage" :message="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import { toRef, computed, onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useField } from "vee-validate";
import {
  FloatingInputStyle,
  FloatingLabelStyle,
  RegularInputStyle,
  RegularLabelStyle,
  type inputState,
} from "./constants";
import validInputStyle from "./useVariation";
import InputErrorMessage from "./InputErrorMessage.vue";
import InputSuccessMessage from "./InputSuccessMessage.vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  variation: {
    type: String,
    default: "regular",
  },
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  validateSuccess: {
    type: Boolean,
    default: false,
  },
  successMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "normal",
  },
  inputType: {
    type: String,
    default: "input",
  },
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, "name");
const initialValue = toRef(props, "value");
// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue,
});

const variations = {
  regular: {
    input: RegularInputStyle,
    label: RegularLabelStyle,
  },
  floating: {
    input: FloatingInputStyle,
    label: FloatingLabelStyle,
  },
} as { [key: string]: { input: inputState; label: inputState } };

const labelStateStyle = variations[props.variation].label;
const inputStateStyle = variations[props.variation].input;

const inputSize = computed(() => {
  if (props.size == "small") return "h-[42px]";
  if (props.size == "normal") return "h-[55px]";
  if (props.size == "large") return "h-[62px]";

  return "h-[55px]"
});

const labelInputSize = computed(() => {
  if (props.size == "small") return "text-sm";
  if (props.size == "normal") return "text-normal";
  if (props.size == "large") return "text-lg";

  return "text-normal"
});

const labelStyle = computed(() => {
  return validInputStyle(labelStateStyle, meta, props);
});

const inputStyle = computed(() => {
  return validInputStyle(inputStateStyle, meta, props);
});

const showSuccessMessage = computed(() => {
  const { disabled, validateSuccess } = props;
  if (disabled) return false;

  const { valid, dirty, validated } = meta;

  const validAndHasInput = valid && dirty;
  const maybeEmptyButValidated = valid && validated;

  return validateSuccess && (validAndHasInput || maybeEmptyButValidated);
});

const showErrorMessage = computed(() => {
  const { disabled } = props;
  if (disabled) return false;

  const { valid, dirty, validated } = meta;
  return (!valid && dirty) || (!valid && validated);
});

onMounted(() => {
  initFlowbite();
});
</script>
