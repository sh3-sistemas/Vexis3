<template>
  <InputText v-bind="$attrs"></InputText>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import type { InputTextProps } from "primevue";

defineOptions({
  inheritAttrs: false,
});

defineProps<InputTextProps>();
</script>
