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

const buttonClass = "max-h-11 bg-transparent rounded-xl shadow-md";
const tabListPT = {
  activeBar: { class: "hidden" },
  tabList: { class: "max-h-11 border-0 gap-x-1 mb-[-5px]" },
  nextButton: { class: buttonClass },
  prevButton: { class: buttonClass },
};
const tabPT = {
  root: { class: "w-48 pt-3 rounded-t-xl border-0" },
};
</script>
