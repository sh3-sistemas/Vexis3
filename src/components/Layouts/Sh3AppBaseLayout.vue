<template>
  <Sh3UserNavbar v-bind="navbar">
    <template v-for="slot in navbarSlots" #[slot]>
      <slot :name="'nav-' + slot" />
    </template>
  </Sh3UserNavbar>
  <AppBaseSidebar :items="side.items">
    <template v-for="slot in sidebarSlots" #[slot]>
      <slot :name="slot" />
    </template>
    <template #content>
      <AppBaseSystemWrapper>
        <AppBaseToolbar v-if="!toolbar.hidden" v-bind="toolbar">
          <template v-for="slot in toolbarSlots" #[slot]>
            <slot :name="'toolbar-' + slot" />
          </template>
        </AppBaseToolbar>
        <div
          class="system-content--general grow flex flex-col gap-4 md:overflow-auto"
        >
          <AppBaseHeader v-if="header" v-bind="header" />
          <div
            class="system-content-general--body grow flex flex-col overflow-auto"
          >
            <Sh3RouterLinkTabs
              v-bind="tabs"
              @change-route="(name) => emits('tabChangeRoute', name)"
            />
            <div
              class="system-content-general--main grow overflow-auto rounded-xl px-2 md:px-6 pt-6 pb-4 z-10 bg-white h-full"
            >
              <slot />
            </div>
          </div>
        </div>
      </AppBaseSystemWrapper>
    </template>
  </AppBaseSidebar>
</template>

<script setup lang="ts">
import Sh3UserNavbar from "../Navigation/Sh3UserNavbar.vue";
import type { Sh3UserNavBarSlots } from "../Navigation/types";
import AppBaseToolbar, {
  type AppBaseToolbarSlots,
} from "./fragments/AppBaseToolbar.vue";
import AppBaseHeader from "./fragments/AppBaseHeader.vue";
import Sh3RouterLinkTabs from "../Tabs/Sh3RouterLinkTabs.vue";
import type { AppBaseLayoutProps } from "./types";

import AppBaseSidebar from "./fragments/sidebar/AppBaseSidebar.vue";
import AppBaseSystemWrapper from "./fragments/AppBaseSystemWrapper.vue";
import type { Sh3AppBaseSidebarSlots } from "./fragments/sidebar/types";

const navbarSlots: Array<keyof Sh3UserNavBarSlots> = [
  "logo",
  "extra",
  "navlinks",
];
const sidebarSlots: Array<keyof Sh3AppBaseSidebarSlots> = [
  "side-header",
  "side-footer",
];
const toolbarSlots: Array<keyof AppBaseToolbarSlots> = ["left"];

const emits = defineEmits(["sideOnClose", "sideOnOpen", "tabChangeRoute"]);

withDefaults(defineProps<AppBaseLayoutProps>(), {
  side: () => {
    return {
      items: [],
    };
  },
  toolbar: () => {
    return {
      hidden: false,
    };
  },
});
</script>
