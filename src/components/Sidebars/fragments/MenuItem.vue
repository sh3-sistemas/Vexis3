<template>
  <button
    :key="item.key"
    ref="templateItem"
    v-tooltip.right="{
      value: item.label,
      disabled: sidebarIsOpen ? true : false,
      showDelay: 50,
      hideDelay: 50,
    }"
    :class="[
      'item-wrapper',
      'inline-flex',
      'gap-x-2',
      'mt-2',
      'justify-center',
      'cursor-pointer',
      'hover:bg-surface-50',
      'p-1.5',
      'rounded-[5px]',
      sidebarIsOpen ? 'justify-between w-full' : 'w-fit',
      (sidebarItemMenuActive as SidebarRoot).rootActiveStyle,
      sidebarItemMenuActive,
    ]"
    @click="
      (sidebarIsOpen ? router.push({ name: item.route }) : $emit('openSidebar'),
      router.push({ name: item.route }))
    "
  >
    <div class="item-wrapper--label flex gap-x-2 items-center">
      <component
        :is="item.icon"
        :class="[
          'w-5 h-auto',
          sidebarStyles,
          sidebarIsOpen ??
            (sidebarItemMenuActive as SidebarRoot).rootIconActiveStyle,
        ]"
      />
      <Transition name="out-right">
        <span
          v-show="sidebarIsOpen"
          :class="['inner', root ? 'font-medium' : 'ml-2']"
        >
          {{ item.label }}
        </span>
      </Transition>
    </div>
    <Icon
      v-if="hasSubmenu && sidebarIsOpen"
      :icon="
        active ? 'majesticons:chevron-up-line' : 'majesticons:chevron-down-line'
      "
      color="rgb(209 213 219 / var(--tw-border-opacity))"
      class="w-5 h-auto"
    />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import type {
  Category,
  MenuConfigData,
  SidebarRoot,
  TabMenuItem,
} from "./types";
import type { GeneralStyles } from "vexis3";

type MenuItemProps = {
  item: TabMenuItem; // Representa um objeto genérico
  active: boolean;
  root: boolean;
  hasSubmenu: boolean | any[]; // Pode ser boolean ou array de qualquer tipo
  sidebarStyles: string;
};

const props = withDefaults(defineProps<MenuItemProps>(), {
  item: () => ({
    key: "",
    label: "",
    items: [],
  }),
  active: false,
  root: false,
  hasSubmenu: false,
  sidebarStyles: "",
});
const sidebarIsOpen = inject("sidebarIsOpen");
const route = useRoute();
const router = useRouter();
const styles = inject<GeneralStyles>("styles") as GeneralStyles;
const templateItem = ref(undefined);

const splitedKey = computed(() => {
  return props.item.key.split("_");
});

const menuConfigData: MenuConfigData = {
  root: {
    parent: route.matched.find((item) => item.meta.level == 0)?.name,
    activeStyle: sidebarIsOpen
      ? styles.sidebarMenuItem.active
      : styles.sidebarMenuItem.activeWhenClosed,
  },
  tabSubmenu: {
    parent: route.matched[route.matched.length - 2]?.name,
    activeStyle:
      styles.sidebarMenuItem.text + " font-semibold pointer-events-none",
  },
  submenu: {
    parent: route.matched[route.matched.length - 3]?.name,
    activeStyle: "bg-surface-50",
  },
};

const isCurrentRouteActive = splitedKey.value.includes(
  route.name?.toString() ?? "",
);

const isCurrentRouteParentActive = (category: Category) => {
  return splitedKey.value.includes(
    menuConfigData[category].parent?.toString() ?? "",
  );
};

const getMenuActiveStyle = (category: Category) => {
  return menuConfigData[category].activeStyle;
};

const sidebarItemMenuActive = computed(() => {
  if (
    props.root &&
    (isCurrentRouteActive || isCurrentRouteParentActive("root"))
  ) {
    try {
      const rootActiveStyle = getMenuActiveStyle("root");
      const rootIconActiveStyle = styles.sidebarMenuItem.iconActive;
      return { rootActiveStyle, rootIconActiveStyle };
    } catch {
      console.error(
        "Não foi possível determinar uma rota pai. Verifique se os níveis (meta.level) foram declarados corretamente na rota " +
          route.path,
      );
    }
  }

  if (
    props.hasSubmenu &&
    (isCurrentRouteActive ||
      (isCurrentRouteParentActive("submenu") && props.active))
  ) {
    return getMenuActiveStyle("submenu");
  }

  if (
    (isCurrentRouteParentActive("tabSubmenu") && route.meta.isTab) ||
    isCurrentRouteActive
  ) {
    return getMenuActiveStyle("tabSubmenu");
  }

  return "";
});

defineEmits(["openSidebar"]);
</script>

<style>
.out-right-enter-active,
.out-right-leave-active {
  transition: all 3s ease;
}

.out-right-leave-from {
  opacity: 0;
}

.out-right-leave-to {
  opacity: 100;
}
</style>
