<template>
  <Tabs
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

withDefaults(defineProps<Sh3RouterLinkTabsProps>(), {
  tabGroup: () => [],
});

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<string | number>("value", { default: 0 });
const emits = defineEmits(["changeRoute"]);

const buttonClass = "bg-transparent rounded-3xl shadow-lg";
const tabListPT = {
  activeBar: { class: "hidden" },
  tabList: { class: "border-0" },
  nextButton: { class: buttonClass },
  prevButton: { class: buttonClass },
};
const tabPT = {
  root: { class: "w-40" },
};
</script>
