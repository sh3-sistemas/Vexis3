<template>
  <p v-show="enable" class="mt-2 text-sm text-green-600">
    <span class="font-medium">Tudo certo! </span>
    {{ message }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  message: string | undefined;
  enable: boolean;
}>();
</script>
