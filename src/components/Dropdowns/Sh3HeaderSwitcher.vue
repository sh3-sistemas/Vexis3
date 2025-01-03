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
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

import { ref } from "vue";
import type { CustomIcon } from "@/types";
import SelectedHeaderSwitcher from "./fragments/SelectedHeaderSwitcher.vue";
import IconOrImageDisplayer from "./fragments/IconOrImageDisplayer.vue";

export type HeaderSwitcherOption = {
  label: string;
  value: string;
  icon?: CustomIcon;
  img?: string;
};

export type Sh3HeaderSwitcherProps = {
  title: string;
  options: Array<HeaderSwitcherOption>;
  initialValue?: HeaderSwitcherOption;
};

const { isMobile } = useSidebar();

const { options = [], initialValue = { label: "", value: "" } } =
  defineProps<Sh3HeaderSwitcherProps>();

const selected = ref<HeaderSwitcherOption>(initialValue ?? options[0]);
</script>
<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SelectedHeaderSwitcher :selected="selected" :title="title" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          :side-offset="4"
        >
          <DropdownMenuLabel class-name="text-xs text-muted-foreground">
            Unidades Gestoras
          </DropdownMenuLabel>

          <DropdownMenuItem
            v-for="option in options"
            :key="option.value"
            class="gap-2 p-2"
            @click="selected = option"
          >
            <IconOrImageDisplayer :item="option" />
            {{ option.label }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
