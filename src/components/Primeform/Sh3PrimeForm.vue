<script setup lang="ts">
import { Form } from "@primevue/forms";
import { useSlots } from "vue";

const slots = useSlots();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <Form v-bind="$attrs" :pt-options="{ mergeProps: true }">
    <template v-for="(_, slot) in slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </Form>
</template>
