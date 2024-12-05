<template>
  <div
    class="flex flex-col align-items-center p-5 surface-overlay border-round text-center"
  >
    <div class="close-button-wrapper flex items-center justify-end">
      <Button
        icon="pi pi-times"
        severity="secondary"
        text
        rounded
        aria-label="Cancel"
        @click="closeCallback"
      />
    </div>
    <div
      class="border-circle bg-white inline-flex justify-center items-center h-6rem w-6rem"
    >
      <i :class="['text-5xl', message?.icon, message?.iconColor]"></i>
    </div>
    <span :class="['font-bold text-2xl block mb-2 mt-4', message?.iconColor]">
      {{ message?.header }}
    </span>
    <p class="mb-0 whitespace-pre-wrap">{{ message?.message }}</p>
    <div class="flex justify-end gap-2 mt-6">
      <Button
        :label="message?.acceptLabel"
        :severity="message?.acceptClass"
        @click="acceptCallback"
      />
      <Button
        :label="message?.rejectLabel"
        :class="message?.rejectClass"
        outlined
        severity="secondary"
        @click="rejectCallback"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import type { ConfirmationOptions } from "primevue/confirmationoptions";

type RequiredConfirmationProps = {
  message: ConfirmationOptions & { iconColor?: string };
  onClose: () => void;
  onAccept: () => void;
  onReject: () => void;
  closeCallback: () => void;
  acceptCallback: () => void;
  rejectCallback: () => void;
};

defineProps<Partial<RequiredConfirmationProps>>();
</script>
