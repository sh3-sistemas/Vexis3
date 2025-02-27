<template>
  <p v-show="enable" class="mt-2 text-xs text-red-600">
    <span class="font-medium">Ooops! </span>
    {{ message }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  message: string | undefined;
  enable: boolean;
}>();
</script>
