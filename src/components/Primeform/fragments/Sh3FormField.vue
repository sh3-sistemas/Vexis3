<script setup lang="ts">
import { FormField } from "@primevue/forms";
import Message from "primevue/message";

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <FormField v-slot="$field" v-bind="$attrs" :pt-options="{ mergeProps: true }">
    <slot></slot>
    <Message
      v-if="$field?.invalid"
      severity="error"
      size="small"
      variant="simple"
      >{{ $field.error?.message }}</Message
    >
  </FormField>
</template>