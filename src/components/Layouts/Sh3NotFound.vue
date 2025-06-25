<script setup lang="ts">
import type { NotFoundProps } from "./types";
import { variationsConfig } from "./config";

const {
  variation = "default",
  showComplement,
  message,
  complement,
  styling,
} = defineProps<NotFoundProps>();

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <div
    class="not-found--container h-full flex flex-col items-center justify-center gap-0.5"
  >
    <img
      :src="variationsConfig[variation].image"
      alt="Conteúdo não encontrado"
      :class="['w-56 h-auto', styling?.image]"
    />
    <span
      :class="['not-found--message text-lg text-mercury-600', styling?.message]"
    >
      {{ message ?? variationsConfig[variation].message }}
    </span>
    <span
      v-if="showComplement"
      :class="[
        'not-found--complement text-center px-8 mb-6 text-mercury-500',
        styling?.complement,
      ]"
    >
      {{ complement ?? variationsConfig[variation].complement }}
    </span>
    <slot></slot>
  </div>
</template>
