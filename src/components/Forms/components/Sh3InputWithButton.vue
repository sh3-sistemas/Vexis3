<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import Sh3Button from "@/components/Buttons/Sh3Button.vue";
import Sh3InputText from "./Sh3InputText.vue";
import type { Sh3InputWithButtonProps } from "./types";

defineProps<Sh3InputWithButtonProps>();

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <InputGroup :pt-options="{ mergeProps: true }" v-bind="$attrs">
    <Sh3InputText v-bind="inputProps" />
    <Sh3Button v-bind="buttonProps" />
  </InputGroup>
</template>
