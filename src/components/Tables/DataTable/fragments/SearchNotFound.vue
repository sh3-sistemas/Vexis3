<template>
  <div
    class="no-search-found h-full flex flex-col items-center justify-center gap-0.5"
  >
    <img
      src="@/assets/images/illustration/curiosity-search-bro.svg"
      alt="Não há novos avisos"
      class="w-56 h-auto"
    />
    <span class="no-found--h1 text-lg text-slate-600">{{ message }}</span>
    <span v-if="showComplement" class="text-center px-8 mb-6 text-slate-500"
      >{{ complement }}
    </span>
  </div>
</template>

<script setup lang="ts">
type Props = {
  message?: string;
  complement?: string;
  showComplement?: boolean;
};

const {
  message = "Nenhum item encontrado",
  complement = "Experimente alterar ou limpar os filtros aplicados e tente novamente.",
  showComplement = true,
} = defineProps<Props>();
</script>
