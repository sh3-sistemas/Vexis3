<template>
  <button
    type="button"
    @click="isDropdownOpen = !isDropdownOpen"
    :id="id + '-button'"
    :data-dropdown-toggle="id + '-dropdown'"
    data-dropdown-placement="bottom"
    aria-expanded="false"
    :class="
      twMerge(
        'user-dropdown--button flex items-center py-1.5 px-2.5 gap-3 md:me-0 rounded-lg hover:bg-black/10 focus:bg-black/5 text-sm',
        styling.button,
      )
    "
  >
    <span class="sr-only">Open user menu</span>
    <Sh3AvatarFallbackInitials
      style="width: 25px; height: 25px"
      :profile="profile"
      :avatarStyle="styling.avatar"
    />
    <span class="user-dropdown--username md:block hidden">{{
      profile.name
    }}</span>
    <Icon
      :icon="
        isDropdownOpen ? 'majesticons:chevron-up' : 'majesticons:chevron-down'
      "
      class="w-5 h-5 md:block hidden text-primary-800"
    />
  </button>
  <div
    :class="
      twMerge(
        'user-dropdown--menu min-w-[190px] z-50 hidden my-4 list-none divide-y bg-white divide-gray-100 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600',
        styling.dropdown,
      )
    "
    :id="id + '-dropdown'"
  >
    <ul
      :class="
        twMerge(
          'user-dropdown-menu--links p-2 text-sm text-gray-800 divide-y divide-surface-100',
          styling.links.root,
        )
      "
      :aria-labelledby="id + '-button'"
    >
      <RouterLink
        :to="dropdownLink.link"
        v-for="(dropdownLink, index) in dropdownLinks"
        v-bind:key="index"
      >
        <li
          :class="
            twMerge(
              'user-dropdown-menu--link flex flex-row items-center py-1.5 px-2 gap-2 rounded-xs text-sm hover:bg-black/10 border-b border-surface-100',
              styling.links.route,
            )
          "
        >
          <Icon
            v-if="dropdownLink.icon"
            :icon="dropdownLink.icon"
            :class="twMerge('w-3 h-3', styling.links.icon)"
          />
          <span>{{ dropdownLink.label }}</span>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";
import { initFlowbite } from "flowbite";
import Sh3AvatarFallbackInitials from "../Avatars/Sh3AvatarFallbackInitials.vue";

type Profile = {
  photo: string;
  name: string;
};

type UserDropdownLink = {
  label: string;
  link: string;
  icon?: string;
};

type Styling = {
  button: string;
  dropdown: string;
  avatar: {
    root: string;
    image: string;
    fallback: string;
  };
  links: {
    root: string;
    icon: string;
    route: string;
  };
};

defineProps({
  id: {
    type: String,
    default: "era-dropdown",
  },
  profile: {
    type: Object as PropType<Profile>,
    default: () => {
      return {
        photo: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
        name: "Fernando Pessoa",
      };
    },
  },
  dropdownLinks: {
    type: Array<UserDropdownLink>,
    default: () => {
      return [
        {
          label: "",
          link: "/",
          icon: "",
        },
      ];
    },
  },
  styling: {
    type: Object as PropType<Styling>,
    default: () => {
      return {
        button: "",
        avatar: {
          root: "",
          image: "",
          fallback: "",
        },
        dropdown: "",
        links: {
          root: "",
          icon: "",
          route: "",
        },
      };
    },
  },
});

const isDropdownOpen = ref(false);

onMounted(() => {
  initFlowbite();
});
</script>
<style lang="scss" scoped>
.user-dropdown-menu--link:last-child {
  border-color: transparent;
}
</style>
