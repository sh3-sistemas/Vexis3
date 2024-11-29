<template>
  <nav
    :class="
      twMerge(
        'user-navbar--root bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200',
        styling.root
      )
    "
  >
    <div
      :class="
        twMerge(
          'user-navbar--container w-full max-w-screen-3xl inline-flex flex-wrap items-center justify-between mx-auto px-4 md:px-10 py-4',
          styling.container
        )
      "
    >
      <a
        :href="params.logo?.route ?? '/'"
        :alt="params.logo?.label ?? ''"
        :class="
          twMerge(
            'user-navbar--logo-container flex items-center space-x-3 rtl:space-x-reverse',
            styling.logo.container
          )
        "
      >
        <slot name="logo">
          <Icon icon="ph:x-square-thin" height="30px" width="30px" />
        </slot>

        <span
          :class="
            twMerge(
              'user-navbar-logo--label self-center text-2xl font-semibold whitespace-nowrap',
              styling.logo.label
            )
          "
          >{{ params.logo?.label }}</span
        >
      </a>
      <div
        :class="
          twMerge(
            'user-navbar--content-container flex items-center md:order-2 space-x-1 md:space-x-0',
            styling.content
          )
        "
      >
        <div class="extra-container flex items-center space-x-1 md:space-x-0">
          <slot name="extra"></slot>
        </div>
        <Sh3UserDropdown
          :id="id + '-dropdown'"
          :profile="params.profile"
          :dropdownLinks="userLinks"
          :styling="styling.dropdown"
        />
        <button
          type="button"
          :data-collapse-toggle="id"
          :aria-controls="id"
          aria-expanded="false"
          :class="
            twMerge(
              'user-navbar--navlinks-hamburger inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
              styling.hamburger
            )
          "
        >
          <span class="sr-only">Open main menu</span>
          <Icon icon="quill:hamburger" class="w-5 h-auto" />
        </button>
      </div>
      <div
        class="user-navbar-navlinks--container items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        :id="id"
      >
        <slot name="navlinks"></slot>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { twMerge } from "tailwind-merge";
import { initFlowbite } from "flowbite";
import { Icon } from "@iconify/vue";
import Sh3UserDropdown from "../Dropdowns/Sh3UserDropdown.vue";
import type { Sh3UserNavBarProps } from "./types";

// Exemplo de uso com withDefaults
withDefaults(defineProps<Sh3UserNavBarProps>(), {
  id: "era-user-navbar",
  params: () => ({
    logo: {
      route: "/",
      label: "",
      labelStyle: "",
    },
    profile: {
      photo: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
      name: "Fernando Pessoa",
    },
  }),
  userLinks: () => [
    {
      label: "",
      link: "/",
      icon: "",
    },
  ],
  styling: () => ({
    root: "",
    container: "",
    logo: {
      container: "",
      label: "",
    },
    content: "",
    hamburger: "",
    dropdown: {
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
    },
  }),
});

onMounted(() => {
  initFlowbite();
});
</script>
