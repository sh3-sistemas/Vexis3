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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { computed, ref } from "vue";
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
  subtitle: string;
  options: Array<HeaderSwitcherOption>;
  extras: Array<HeaderSwitcherOption>;
  initialValue?: HeaderSwitcherOption;
  separator: boolean;
};

const { isMobile } = useSidebar();

const {
  options = [],
  initialValue = { label: "", value: "" },
  separator = false,
  extras = [],
} = defineProps<Sh3HeaderSwitcherProps>();

const emit = defineEmits<{
  change: [value: HeaderSwitcherOption];
}>();
const selected = ref<HeaderSwitcherOption>(initialValue ?? options[0]);
const showDropdown = computed(() => {
  return options.length > 1;
});
</script>
<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SelectedHeaderSwitcher
            :chevron="showDropdown"
            :selected="selected"
            :title="title"
            :subtitle="subtitle"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          v-if="showDropdown"
          align="start"
          class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          :side-offset="4"
        >
          <DropdownMenuItem
            v-for="option in options"
            :key="option.value"
            class="gap-2 p-2"
            @click="
              selected = option;
              emit('change', option);
            "
          >
            <IconOrImageDisplayer :item="option" />
            {{ option.label }}
          </DropdownMenuItem>
          <DropdownMenuSeparator v-show="separator" />
          <DropdownMenuItem
            v-for="extra in extras"
            :key="extra.value"
            class="gap-2 p-2"
            @click="
              selected = extra;
              emit('change', extra);
            "
          >
            <IconOrImageDisplayer :item="extra" />
            {{ extra.label }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
