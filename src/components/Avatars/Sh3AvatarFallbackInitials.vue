<template>
  <Avatar :label="initials" v-bind="$attrs" shape="circle" />
</template>

<script lang="ts" setup>
import { computed, type PropType, toRef } from "vue";
import { Avatar, type AvatarProps } from "primevue";

defineOptions({
  inheritAttrs: false,
});

type Profile = {
  name: string;
};

type Sh3Avatar = AvatarProps & Profile;

const props = defineProps({
  profile: {
    type: Object as PropType<Sh3Avatar>,
    required: true,
    default: () => {
      return {
        name: "Fernando Pessoa",
        image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
      };
    },
  },
});

const profileRefs = toRef(props, "profile");

const initials = computed(() => {
  if (!profileRefs.value.name) return "UK";
  const { name } = profileRefs.value;
  return name
    .match(/(\b\S)?/g)!
    .join("")
    .match(/(^\S|\S$)?/g)!
    .join("")
    .toUpperCase();
});
</script>
