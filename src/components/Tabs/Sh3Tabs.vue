<template>
  <Tabs v-model:value="model" v-bind="$attrs">
    <TabList>
      <Tab v-for="(tab, index) in tabs" :key="index" :value="index">
        <component
          :is="tab.titleComponent.component"
          v-if="tab.titleComponent"
          v-bind="tab.titleComponent.props"
        />
        <div v-else>{{ tab.title }}</div>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="(tab, index) in tabs" :key="index" :value="index">
        <component
          :is="tab.content.component"
          v-if="tab.content"
          v-bind="tab.content.props"
        />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
<script setup lang="ts">
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

import type { Sh3TabsProps } from "./types";

const { tabs = [] } = defineProps<Sh3TabsProps>();

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<string | number>("value", { default: 0 });
</script>
