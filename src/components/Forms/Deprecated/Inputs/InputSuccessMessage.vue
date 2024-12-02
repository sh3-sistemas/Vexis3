<template>
    <p class="mt-2 text-sm text-green-600 " v-show="enable">
        <span class="font-medium">Tudo certo! </span>
        {{ message }}
    </p>
</template>

<script setup lang="ts">
defineProps<{
    message: string | undefined,
    enable: boolean
}>()
</script>