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
} from "./Inputs/constants";
import validInputStyle from "./Inputs/useVariation";
import InputErrorMessage from "./Inputs/InputErrorMessage.vue";
import InputSuccessMessage from "./Inputs/InputSuccessMessage.vue";

interface opt {
  [key: string]: any;
}

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
    type: [String, Number],
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
  options: {
    type: Array<opt>,
    default: () => [],
  },
  config: {
    type: Object,
    default: () => {},
  },
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, "name");

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
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

const labelKey = computed(() => {
  const { config } = props;
  if (!config) return "label";
  return Object.keys(config).includes("labelKey") ? config.labelKey : "label";
});

const valueKey = computed(() => {
  const { config } = props;
  if (!config) return "value";
  return Object.keys(config).includes("valueKey") ? config.valueKey : "value";
});

const inputSize = computed(() => {
  if (props.size == "small") return "h-[45px]";
  if (props.size == "normal") return "h-[55px]";
  if (props.size == "large") return "h-[62px]";

  return "h-[55px]";
});

const labelInputSize = computed(() => {
  if (props.size == "small") return "text-sm";
  if (props.size == "normal") return "text-normal";
  if (props.size == "large") return "text-lg";

  return "text-normal";
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

const emits = defineEmits(["selectChange"]);

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="relative">
    <label :for="name" :class="[labelStyle, labelInputSize]">{{ label }}</label>
    <select
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[inputStyle, inputSize]"
      @input="
        (e: Event) => {
          handleChange(e);
          emits('selectChange', { name, inputValue });
        }
      "
      @blur="handleBlur"
    >
      <option
        :value="inputValue"
        disabled
        :selected="options.findIndex((x) => x[valueKey] == inputValue) == -1"
      >
        Selecione uma opção
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option[valueKey]"
        :selected="inputValue == option[valueKey]"
      >
        {{ option?.[labelKey] || "" }}
      </option>
    </select>

    <InputSuccessMessage
      :enable="showSuccessMessage"
      :message="successMessage"
    />
    <InputErrorMessage :enable="showErrorMessage" :message="errorMessage" />
  </div>
</template>
