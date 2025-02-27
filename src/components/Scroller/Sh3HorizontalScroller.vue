<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Sh3Button from "../Buttons/Sh3Button.vue";
import type { HorizontalScrollerProps } from "./types";

const {
  mainContainerId,
  containerStyle,
  buttonStyle = "w-8 h-8 !absolute -mt-[37px] mx-1 z-50 bg-white hover:bg-white opacity-20 group-hover/main:opacity-40 hover:!opacity-90",
  iconStyle = "text-primary-700",
  scrollSize = 90,
} = defineProps<HorizontalScrollerProps>();

const mainContainer = ref<HTMLElement>({} as HTMLElement);
const scrollContainer = ref<HTMLElement>({} as HTMLElement);

const hasScroll = ref(false);

const observable = new ResizeObserver((entries) => {
  for (const entry of entries) {
    hasScroll.value = entry.target.scrollWidth > entry.target.clientWidth;
  }
});

onMounted(() => {
  mainContainer.value = document.getElementById(mainContainerId)!;
  scrollContainer.value = document.getElementById("scroller-container")!;
  if (!scrollContainer.value) return;
  observable.observe(scrollContainer.value!);
});

const getContainerWidth = computed(() => {
  return mainContainer.value?.offsetWidth;
});

const scroll = (direction: "left" | "right") => {
  if (scrollContainer.value && direction === "left") {
    scrollContainer.value.scrollLeft -= getContainerWidth.value! - scrollSize;
  }
  if (scrollContainer.value && direction === "right") {
    scrollContainer.value.scrollLeft += getContainerWidth.value! - scrollSize;
  }
};
</script>
<template>
  <div class="scroller--wrapper group/main">
    <div
      id="scroller-container"
      :class="
        'scroller-container w-full overflow-x-auto scroll-smooth ' +
        containerStyle
      "
    >
      <slot></slot>
    </div>
    <div v-if="hasScroll" class="scroll-navigation relative w-full h-0">
      <Sh3Button
        text
        raised
        rounded
        icon="pi pi-chevron-left"
        :pt="{ root: buttonStyle + ' !left-0', icon: iconStyle }"
        @click="scroll('left')"
      />
      <Sh3Button
        text
        raised
        rounded
        icon="pi pi-chevron-right"
        :pt="{ root: buttonStyle + ' !right-0', icon: iconStyle }"
        @click="scroll('right')"
      />
    </div>
  </div>
</template>
<style>
.scroller-container {
  scrollbar-width: none;
  overscroll-behavior: contain auto;
}
</style>
