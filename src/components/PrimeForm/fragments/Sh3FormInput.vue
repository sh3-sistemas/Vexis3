<script setup lang="ts">
import type { FormFieldState } from "@primevue/forms";
import { Message } from "primevue";

export type Sh3FormInputProps = {
  name: string;
  form: Record<string, FormFieldState>;
};

defineProps<Sh3FormInputProps>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <slot></slot>
    <Message
      v-if="form[name]?.invalid"
      severity="error"
      size="small"
      variant="simple"
    >
      {{ form[name].error?.message }}
    </Message>
  </div>
</template>
