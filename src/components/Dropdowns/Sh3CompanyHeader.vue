<script setup lang="ts">
import SidebarMenu from "@/components/ui/sidebar/SidebarMenu.vue";
import SidebarMenuButton from "@/components/ui/sidebar/SidebarMenuButton.vue";

import SidebarMenuItem from "@/components/ui/sidebar/SidebarMenuItem.vue";

import CollapsibleMenu from "../Layouts/fragments/sidebar/content/CollapsibleMenu.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = [
  {
    key: "string",
    label: "Prefeitura Municipal de São João Del Rei",
    items: [],
    icon: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfSuQQkGFfI32ba2a5VMflsdxhvanJmxt2A&s",
      title: "Prefeitura Municipal de São João Del Rei",
    },
  },
];
</script>
<template>
  <SidebarMenu class="my-2">
    <template v-for="item in items" :key="item.label">
      <CollapsibleMenu v-if="item.items.length" :item="item" />
      <SidebarMenuItem v-else as-child>
        <SidebarMenuButton
          :tooltip="item.label"
          class="!p-0"
          @click="router.push({ path: '/' })"
        >
          <img
            v-if="item.icon"
            :src="item.icon.src"
            class="w-full h-auto shrink-0 max-w-11"
            :title="item.icon.title"
          />
          <span
            class="w-full leading-tight !text-clip !line-clamp-3 !text-wrap"
            >{{ item.icon.title }}</span
          >
        </SidebarMenuButton>
      </SidebarMenuItem>
    </template>
  </SidebarMenu>
</template>
