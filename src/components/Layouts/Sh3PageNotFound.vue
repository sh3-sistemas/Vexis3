<template>
    <main class="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">{{ miniTitle }}</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {{ title }}
            </h1>
            <p class="mt-6 text-base leading-7 text-gray-600">
                {{ subtitle }}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a :href="socialLink" target="_blank" class="text-sm font-semibold text-gray-900">Contact support <span
                        aria-hidden="true">&rarr;</span></a>
            </div>
        </div>
    </main>
</template>
  
<script setup lang="ts">
defineProps<{
    miniTitle: string;
    title: string;
    subtitle: string;
    socialLink: string;
}>();
</script>
  