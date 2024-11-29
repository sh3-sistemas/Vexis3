<template>
  <div
    :class="['flex justify-center', sidebarIsOpen ? 'px-5' : 'px-0 min-h-full']"
  >
    <Sh3DropdownMenu
      :model="
        items.map((item: TabMenuItem) => {
          return setUpCommand(item);
        })
      "
      :pt="{ ...pt }"
      :class="sidebarIsOpen ? '' : 'flex flex-col items-center'"
    >
      <template #item="slotProps">
        <MenuItem
          v-bind="{ ...slotProps }"
          :sidebar-is-open="toRef(sidebarIsOpen)"
          :sidebar-styles="sidebarStyles"
          @open-sidebar="$emit('toggleSideBar')"
        />
      </template>
    </Sh3DropdownMenu>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRef } from "vue";
import MenuItem from "./MenuItem.vue";
import type { TabMenuItem, TabMenuProps } from "./types";
import type { GeneralStyles } from "@/types";

import Sh3DropdownMenu from "@/components/Dropdowns/Sh3DropdownMenu.vue";

withDefaults(defineProps<TabMenuProps>(), {
  items: () => [],
});

const sidebarIsOpen = inject("sidebarIsOpen");
const styles = inject<GeneralStyles>("styles") as GeneralStyles;

const sidebarStyles = computed(() => {
  if (!styles) return "";
  return Object.values(styles.sidebarMenu).join(" ");
});

const pt = {
  headerContent: {
    class: ["border-none"],
  },
  menucontent: {
    class: ["border-none"],
  },
};

defineEmits(["toggleSideBar"]);

const setUpCommand = (item: TabMenuItem) => {
  const command = sidebarIsOpen ? undefined : () => item.command;
  return { ...item, command };
};
</script>
