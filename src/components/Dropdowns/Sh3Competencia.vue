<script setup lang="ts">
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { computed, ref } from "vue";
import Badge from "primevue/badge";
import Carousel from "primevue/carousel";

import type { Competencia, Sh3CompetenciaProps } from "./types";

const emits = defineEmits([
  "gereciar",
  "selecionar",
  "newCompetencia",
  "changeYear",
]);

const { isMobile } = useSidebar();

const { competencias = [], value = { mes: "", estado: "" } } =
  defineProps<Sh3CompetenciaProps>();

const selected = ref<Competencia>(value ?? competencias[0]);

const severityFromState = {
  Aberta: "success",
  Fechada: "info",
  Reaberta: "warn",
};
const competenciasFormatadas = computed(() =>
  competencias.map((x) => ({
    ...x,
    estado: severityFromState[x.estado as keyof typeof severityFromState],
    mesName: new Date(x.mes + "/01")
      .toLocaleString("default", { month: "long" })
      .slice(0, 3),
  })),
);

function yearsRange(range: number) {
  const yearList = [];
  const year = Number(new Date().getFullYear()) - range / 2;
  for (let i = 0; i < 20; i += 1) {
    yearList.push(year + i);
  }
  return yearList;
}
const yearsList = yearsRange(20);
</script>

<template>
  <div class="p-2">
    <h4>Competência:</h4>
    <div class="border rounded-lg grid grid-cols-5 p-2 items-center">
      <div class="col-span-2 pl-2">{{ value.mes }}</div>
      <div class="col-span-2 flex flex-row justify-end gap-2">
        {{ value.estado }}
        <Badge
          :severity="
            severityFromState[value.estado as keyof typeof severityFromState]
          "
          class="my-auto"
        />
      </div>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Sh3Button
                icon="pi pi-sync"
                text
                class="!flex justify-self-end"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              class="w-[--radix-dropdown-menu-trigger-width] min-w-56 p-4 gap-4 rounded-lg flex flex-col"
              :side="isMobile ? 'bottom' : 'right'"
              :side-offset="28"
            >
              <p class="text-xs">Competências</p>
              <Carousel
                :value="yearsList"
                :page="yearsList.length / 2"
                :show-indicators="false"
                :pt-options="{ mergeProps: true }"
                :pt="{
                  itemList: 'h-full',
                  item: 'justify-center items-center',
                  pcPrevButton: { root: '!px-2 !py-1 m-1' },
                  pcNextButton: { root: '!px-2 !py-1 m-1' },
                }"
                @update:page="
                  (value: number) => emits('changeYear', yearsList[value])
                "
              >
                <template #item="slotProps">
                  {{ slotProps.data }}
                </template>
              </Carousel>
              <div class="grid grid-cols-3 gap-2 text-center">
                <Sh3Button
                  v-for="(competencia, index) in competenciasFormatadas"
                  :key="index"
                  outlined
                  badge=" "
                  badge-class="!min-w-2 !size-2"
                  :badge-severity="competencia.estado"
                  :label="String(competencia.mesName)"
                  :class="
                    'min-h-8 ' +
                    (selected.mes == competencia.mes ? '!bg-primary-100' : '')
                  "
                  @click="selected = competencias[index]"
                />
                <DropdownMenuItem
                  v-if="competencias.length < 12"
                  class="p-0"
                  @click="emits('newCompetencia')"
                >
                  <Sh3Button class="border-dashed w-full" outlined label="+" />
                </DropdownMenuItem>
              </div>
              <div class="flex justify-center gap-2">
                <DropdownMenuItem class="p-0" @click="emits('gereciar')">
                  <Sh3Button outlined label="Gerenciar" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  class="p-0"
                  @click="emits('selecionar', selected)"
                >
                  <Sh3Button label="Selecionar" />
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  </div>
</template>
