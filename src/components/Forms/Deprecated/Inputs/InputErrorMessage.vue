<template>
    <p class="mt-2 text-xs text-red-600 " v-show="enable">
        <span class="font-medium">Ooops! </span>
        {{ message }}
    </p>
</template>

<script setup lang="ts">
defineProps<{
    message: string | undefined,
    enable: boolean
}>()
</script>