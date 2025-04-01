<template>
  <Tabs
    v-if="router.currentRoute.value.meta.isTab"
    v-model:value="model"
    :scrollable="true"
    v-bind="$attrs"
    @update:value="
      (e: any) => {
        emits('changeRoute', tabGroup[e].name);
      }
    "
  >
    <TabList :pt="tabListPT" :pt-options="{ mergeProps: true }">
      <Tab
        v-for="(tab, index) in tabGroup"
        :key="index"
        :value="index"
        :pt="tabPT"
        :pt-options="{ mergeProps: true }"
        :disabled="disabled"
      >
        {{ tab.label }}
      </Tab>
    </TabList>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import type { Sh3RouterLinkTabsProps } from "./types";
import { useRouter } from "vue-router";
import { watch } from "vue";

const { tabGroup = [] } = defineProps<Sh3RouterLinkTabsProps>();

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<string | number>("value", { default: 0 });
const emits = defineEmits(["changeRoute"]);

const buttonClass = "max-h-11 rounded-xl shadow-md";
const tabListPT = {
  root: { class: "-mb-[10px]" },
  activeBar: { class: "hidden" },
  tabList: {
    class: "max-h-11 border-0 gap-x-1 leading-none bg-transparent",
    root: "leading-none",
  },
  nextButton: { class: buttonClass },
  prevButton: { class: buttonClass },
};
const tabPT = {
  root: ({ context }: { context: any }) => ({
    class: [
      "w-[calc(50%-3px)] md:w-48 pt-3 rounded-t-xl border-0 font-normal",
      {
        "bg-white": context.active,
        "bg-mercury-100": !context.active,
      },
    ],
  }),
};

const router = useRouter();
watch(
  router.currentRoute,
  (newRoute) => {
    const index = tabGroup.findIndex(
      (item: { name: string }) => item.name == newRoute.name,
    );
    if (index != -1) model.value = index;
  },
  { immediate: true },
);
</script>
