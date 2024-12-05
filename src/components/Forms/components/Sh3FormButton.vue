<!-- CustomElement.vue -->
<!-- eslint-disable vue/block-lang -->
<template>
  <ElementLayout ref="container" :class="[containerClass]">
    <template #element>
      <Sh3Button
        :tabindex="isDisabled || isLoading ? -1 : undefined"
        :class="[
          'min-w-24 shrink-0',
          classes.button,
          full ? 'w-full' : '',
          buttonClass,
        ]"
        :loading="isLoading"
        :label="buttonLabel"
        :severity="severity ? severity : null"
        :outlined="outlined"
        :raised="raised"
        :text="text"
        :rounded="rounded"
        :icons="icons"
        :icon-pos="iconPos"
        v-bind="{
          ...button,
          ...aria,
        }"
        @click.prevent="handleClick"
      />
    </template>
  </ElementLayout>
</template>

<script>
import { ref } from "vue";
import { defineElement, ButtonElement } from "@vueform/vueform";
import { classes } from "@vueform/vueform/dist/tailwind";

export default defineElement({
  ...ButtonElement,
  name: "Sh3FormButton",
  inheritAttrs: false,
  props: {
    containerClass: {
      type: String,
      required: false,
      default: "",
    },
    severity: {
      type: String,
      required: false,
      default: "",
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    raised: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    icons: {
      type: String,
      required: false,
      default: "",
    },
    iconPos: {
      type: String,
      required: false,
      default: "",
    },
    ...ButtonElement.props,
  },
  setup(props, context) {
    const { severity, danger, secondary } = props;

    if (!severity && danger) {
      props.severity = "danger";
    }

    if (!severity && secondary) {
      props.severity = "secondary";
    }

    const element = ButtonElement.setup(props, context);
    const defaultClasses = ref({
      ...classes.EditorElement,
    });

    return {
      defaultClasses,
      ...element,
    };
  },
});
</script>
