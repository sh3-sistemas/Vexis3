<template>
  <Form
    v-slot="$form"
    :initial-values="initialValues"
    :resolver="resolver"
    class="flex flex-col gap-4 w-full sm:w-56"
    @submit="(e) => emit('submit', e)"
  >
    <div class="flex flex-col gap-1">
      <InputText name="username" type="text" placeholder="Username" fluid />
      <Message
        v-if="$form.username?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.username.error?.message }}
      </Message>

      <slot name="form" :form="$form"></slot>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
  </Form>
</template>

<script setup lang="ts">
import { Form, type FormProps, type FormSubmitEvent } from "@primevue/forms";
import { Message, InputText, Button } from "primevue";
import { reactive } from "vue";

export type PrimeFormProps = {
  onFormSubmit: (e: FormSubmitEvent) => void;
};

defineProps<FormProps>();

const initialValues = reactive({
  username: "",
  usermail: "",
});

// 3.3+: alternative, more succinct syntax
const emit = defineEmits<{
  submit: [e: FormSubmitEvent];
}>();

/* const onFormSubmit = (form: FormSubmitEvent) => {
  console.log(form);
}; */
</script>
