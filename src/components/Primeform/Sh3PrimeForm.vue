<script setup lang="ts">
import { Form } from "@primevue/forms";
import { useSlots } from "vue";

defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();
</script>

<template>
  <Form v-slot="formScope" v-bind="$attrs">
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
