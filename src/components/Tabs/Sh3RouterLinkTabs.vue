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
    <TabList>
      <Tab v-for="(tab, index) in tabGroup" :key="index" :value="index">
        {{ tab.label }}
      </Tab>
    </TabList>
  </Tabs>
</template>

<script setup lang="ts">
import type { Sh3RouterLinkTabsProps } from "./types";

withDefaults(defineProps<Sh3RouterLinkTabsProps>(), {
  tabGroup: () => [],
});

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<string | number>("value", { default: 0 });
const emits = defineEmits(["changeRoute"]);
</script>
