<template>
  <div
    v-for="({ text, label, tag }, index) in notifications"
    :key="index"
    class="notification w-full flex flex-row justify-between items-center border-b border-surface-200 py-2 px-2"
  >
    <div class="notification-text flex flex-col gap-0.5 justify-center">
      <span class="text">
        {{ text }}
      </span>
      <span class="label text-sm text-surface-500">
        {{ label.time }} | {{ label.autarchy }}
      </span>
    </div>
    <Sh3CardTag :tag-variation="tag" />
  </div>
</template>

<script setup lang="ts">
import Sh3CardTag from "./fragments/Sh3CardTag.vue";
import type { NotificationCardProps } from "./types";

withDefaults(defineProps<NotificationCardProps>(), {
  notifications: () => [],
});
</script>
