<template>
  <div
    :class="
      twMerge(
        'toggle-sidebar--wrapper h-full flex flex-col gap-2 pt-6 pb-3 bg-white',
        styling.container,
        isOpen ? 'opened' : 'closed',
      )
    "
  >
    <div
      :class="
        twMerge(
          'toggle-sidebar--header-wrapper flex flex-col w-full items-center',
          isOpen ? 'px-5' : 'px-1',
        )
      "
    >
      <div
        :class="
          twMerge(
            'toggle-sidebar-header--title-wrapper w-full inline-flex items-start gap-4',
            isOpen ? 'justify-start' : 'pl-2',
            styling.header,
          )
        "
      >
        <div
          class="toggle-sidebar-header--icon !w-12 !h-12 rounded-full bg-inherit flex items-center justify-center shrink-0 self-center"
        >
          <img :src="icon.src" class="w-10 h-auto" :title="icon.title" />
        </div>
        <Transition name="title">
          <span
            v-show="isOpen"
            class="grow leading-tight line-clamp-3"
            :title="title"
            >{{ title }}</span
          >
        </Transition>
      </div>
      <slot name="header-extra-content"></slot>
    </div>
    <div
      :class="
        twMerge(
          'toggle-sidebar--body overflow-y-auto grow',
          styling.body,
          isOpen ? 'overflow-y-auto' : 'overflow-hidden',
        )
      "
    >
      <slot name="body-content"></slot>
    </div>
    <div :class="twMerge('toggle-sidebar--footer h-[7%]', styling.footer)">
      <slot name="footer-content"></slot>
    </div>
  </div>
  <Sh3IconButton
    class="!w-7 !h-7 shrink-0 mt-16 -ml-6 relative !bg-mercury-300 !hover:bg-mercury-400 !active:bg-primary-300 !shadow !ring-0 !ring-transparent"
    severity="secondary"
    :icon="{
      name: isOpen ? 'majesticons:chevron-left' : 'majesticons:chevron-right',
      styling: 'w-5 h-auto text-white',
    }"
    rounded
    @click="toggleSidebar()"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { twMerge } from "tailwind-merge";
import type { Sh3ToggleSidebarProps } from "./types";
import { Sh3IconButton } from "../Buttons";

const isOpen = ref(true);
const emits = defineEmits(["onOpen", "onClose"]);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    emits("onClose");
    return;
  }
  emits("onOpen");
};

withDefaults(defineProps<Sh3ToggleSidebarProps>(), {
  title: "Prefeitura Municipal de São João Del Rei",
  icon: () => {
    return {
      src: "https://png.pngtree.com/png-clipart/20220626/original/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_8188672.png",
      title: "",
    };
  },
  styling: () => {
    return {
      container: "",
      header: "",
      body: "",
      footer: "",
    };
  },
});

defineExpose({ toggleSidebar });
</script>
<style scoped>
.toggle-sidebar--wrapper {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}
.opened {
  width: 280px;
}

@media only screen and (min-width: 1025px) {
  .opened {
    width: 320px;
  }
}

.closed {
  width: 70px;
}

.title-enter-active {
  transition: all 0.1s ease;
  transition-delay: 0.15s;
}

.title-leave-active {
  transition: all 0.05s ease;
}

.title-enter-from,
.title-enter-to {
  opacity: 0;
  text-wrap: nowrap;
}
</style>
