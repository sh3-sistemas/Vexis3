<template>
  <div
    id="toast-success"
    :class="
      twMerge(
        'flex items-center w-full md:max-w-xs p-4 mb-4 text-mercury-800 bg-white rounded-lg shadow-md',
        styles.box
      )
    "
    role="alert"
  >
    <div
      :class="[
        'inline-flex items-center justify-center flex-shrink-0 w-8 h-8',
        styles.colors,
      ]"
    >
      <Icon :icon="styles.icon" :class="['w-5 h-auto', styles.colors]" />
    </div>
    <div class="grow ml-3 text-sm font-medium">{{ message }}</div>
    <button
      type="button"
      :class="
        twMerge(
          'ml-auto -mx-1.5 -my-1.5 text-mercury-600 rounded-lg focus:ring-2 focus:ring-mercury-300 p-1.5 hover:bg-mercury-100 inline-flex h-8 w-8 items-center justify-center',
          styles.box,
          styles.hover
        )
      "
      data-dismiss-target="#toast-success"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <Icon
        icon="heroicons-solid:x-mark"
        :class="['w-3 h-auto text-mercury-800']"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";

import configuration from "./configuration";
import type { NotificationType } from "./types";

export type NotificationProps = {
  message: string;
  notificationType: NotificationType;
};

const props = withDefaults(defineProps<NotificationProps>(), {
  message: "",
  notificationType: "success",
});

const styles = computed(() => {
  return configuration[props.notificationType];
});
</script>

<style lang="scss">
.Vue-Toastification__toast {
  padding: 0 !important;
  font-family: inherit !important;
  box-shadow: none !important;
}

.Vue-Toastification__toast {
  background-color: transparent !important;
  color: inherit !important;
}
</style>
