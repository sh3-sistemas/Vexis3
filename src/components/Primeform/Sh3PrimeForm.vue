<script setup lang="ts">
import { Form } from "@primevue/forms";
import { useSlots, useTemplateRef, type ComponentPublicInstance } from "vue";

const form = useTemplateRef<ComponentPublicInstance>("primeForm");

defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();

defineExpose({ form });
</script>

<template>
  <Form ref="primeForm" v-slot="formScope" v-bind="$attrs">
    <!-- Slot default -->
    <slot v-bind="formScope" />

    <!-- Slots nomeados -->
    <template v-for="(_, slotName) in slots" :key="slotName">
      <template v-if="slotName !== 'default'">
        <slot :name="slotName" v-bind="formScope" />
      </template>
    </template>
  </Form>
</template>
