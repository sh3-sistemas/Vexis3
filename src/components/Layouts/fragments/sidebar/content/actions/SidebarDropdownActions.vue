<script setup lang="ts">
import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import { customToast as toast } from "@/services/toast/customToast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { SidebarMenuAction } from "@/components/ui/sidebar";
import {
  MoreHorizontal,
  Info,
  Paperclip,
  SquareArrowOutUpRightIcon,
} from "lucide-vue-next";
import { inject, provide, ref } from "vue";
import { useRouter } from "vue-router";
import SidebarDropdownActionItem from "./SidebarDropdownActionItem.vue";
import type { DropdownAction } from "./types";

const { item } = defineProps<{ item: TabMenuItem }>();
provide("item", item);

const moduleUrl = inject<string>("moduleUrl") as string;
const router = useRouter();
const isDropdownOpen = ref(false);

const getFullPath = (item: TabMenuItem) => {
  return router.getRoutes().find((route) => route.name == item.key)?.path;
};

const actions: Array<DropdownAction> = [
  {
    label: "Abrir em nova aba",
    icon: SquareArrowOutUpRightIcon,
    action: (item: TabMenuItem) => {
      const fullPath = getFullPath(item);
      window.open(moduleUrl + fullPath, "_blank")?.focus();
    },
  },
  {
    label: "Copiar Link",
    icon: Paperclip,
    action: (item: TabMenuItem) => {
      const fullPath = getFullPath(item);
      navigator.clipboard.writeText(
        window.location.origin + moduleUrl + fullPath,
      );
      toast.success("Link copiado para a área de transferência!");
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

const openDropdown = () => {
  isDropdownOpen.value = true;
};

defineExpose({ openDropdown });
</script>

<template>
  <DropdownMenu v-model:open="isDropdownOpen">
    <DropdownMenuTrigger as-child>
      <SidebarMenuAction
        class="hover:opacity-100"
        :class="{ 'opacity-0': !isDropdownOpen }"
        @click.stop="isDropdownOpen = true"
      >
        <MoreHorizontal class="text-surface-500" />
      </SidebarMenuAction>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start">
      <SidebarDropdownActionItem
        v-for="action in actions"
        :key="action.label"
        :action="action"
      />

      <DropdownMenuSeparator />

      <SidebarDropdownActionItem :action="moreInfo" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
