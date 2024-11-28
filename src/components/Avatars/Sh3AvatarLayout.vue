<template>
  <div class="layout-container grid grid-cols-24">
    <div
      class="main-container mt-2 col-start-2 col-span-22 flex flex-col items-center justify-center"
    >
      <div class="avatar-container z-10 py-2.5 inline-flex justify-center">
        <Sh3AvatarFallbackInitials
          :profile="avatar.profile"
          :avatarStyle="avatar.style"
        />
      </div>
      <div
        class="content w-full -top-[50px] relative pt-[45px] pb-8 px-8 flex flex-col gap-6 rounded-[25px] bg-white"
        style="box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.02)"
      >
        <div class="greetings-container grow inline-flex justify-center">
          <HighlightTitle />
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import HighlightTitle from "../Typography/Titles/HighlightTitle.vue";
import Sh3AvatarFallbackInitials from "./Sh3AvatarFallbackInitials.vue";

type Avatar = {
  profile: {
    name: string;
    photo: string;
  };
  style: {
    root: string;
    image: string;
    fallback: string;
  };
};

defineProps({
  avatar: {
    type: Object as PropType<Avatar>,
    default: () => {
      return {
        profile: {
          name: "Fernando Pessoa",
          photo:
            "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
        },
        style: {
          root: "ring-offset-1 ring-8 ring-white",
          image: "",
          fallback: "",
        },
        root: {},
      };
    },
  },
});
</script>

<style lang="scss" scoped>
:root {
  --tw-ring-offset-width: 1px;
  --tw-ring-offset-color: transparent;
}

.bg-blackA3 {
  box-shadow:
    0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),
    0 0 0 8px rgb(255, 255, 255);
  background-color: #1e8381;
  color: white;
  font-size: 30px;
  line-height: 36px;
}
.layout-container {
  width: 99vw;
  width: 99dvw;
}
</style>
