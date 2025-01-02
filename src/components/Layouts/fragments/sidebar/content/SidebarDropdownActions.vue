<script setup lang="ts">
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { SidebarMenuAction } from "@/components/ui/sidebar";
import type { CustomIcon } from "@/types";
import {
  MoreHorizontal,
  Info,
  Paperclip,
  SquareArrowOutUpRightIcon,
} from "lucide-vue-next";

export type DropdownAction = {
  label: string;
  icon: CustomIcon | string;
  action: (item: TabMenuItem) => void;
};

const { item } = defineProps<{ item: TabMenuItem }>();

const actions: Array<DropdownAction> = [
  {
    label: "Abrir em nova aba",
    icon: SquareArrowOutUpRightIcon,
    action: (item: TabMenuItem) => {
      window.open(item.key, "_blank");
    },
  },
  {
    label: "Copiar Link",
    icon: Paperclip,
    action: (item: TabMenuItem) => {
      navigator.clipboard.writeText(item.key);
    },
  },
];

const moreInfo = {
  label: "Mais informações",
  icon: Info,
  action: (item: TabMenuItem) => {
    alert(`More information about ${item.label}`);
  },
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <SidebarMenuAction>
        <MoreHorizontal class="text-surface-500" />
      </SidebarMenuAction>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start">
      <DropdownMenuItem
        v-for="action in actions"
        :key="action.label"
        @click="action.action(item)"
      >
        <component :is="action.icon" />
        <DropdownMenuLabel>
          {{ action.label }}
        </DropdownMenuLabel>
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuItem @click="moreInfo.action(item)">
        <component :is="moreInfo.icon" />
        <DropdownMenuLabel>
          {{ moreInfo.label }}
        </DropdownMenuLabel>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
