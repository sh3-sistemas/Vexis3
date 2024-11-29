<template>
  <div
    class="no-search-found h-full flex flex-col items-center justify-center gap-0.5"
  >
    <img
      src="@/assets/images/illustration/Search-engines-bro.svg"
      alt="Não encontrado"
      class="w-80 h-auto"
    />
    <span class="no-found--h1 text-lg text-slate-500">{{ subtitle }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ subtitle: string }>();
defineOptions({
  inheritAttrs: false,
});
</script>
