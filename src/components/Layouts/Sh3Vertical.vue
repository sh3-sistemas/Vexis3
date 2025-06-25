<template>
  <div
    class="layout--wrapper h-dvh flex flex-col xl:grid xl:grid-cols-12 xl:grid-flow-col gap-0.5"
  >
    <div
      :class="
        twMerge(
          'side--container h-fit xl:h-full hidden md:flex xl:flex-col items-center bg-mercury-700 md:col-span-full xl:col-span-3 py-8 xl:py-24 pl-8 xl:pl-0',
          layoutConfig.addStyle.side,
        )
      "
    >
      <div
        class="img-container h-fit xl:grow block xl:flex items-start justify-center"
      >
        <slot name="logo"></slot>
      </div>
      <div
        :class="
          twMerge(
            'links--container grow xl:grow-0 flex justify-end items-center px-12',
            layoutConfig.addStyle.sideMenu,
          )
        "
      >
        <ul class="links--list flex flex-col h-auto list-none gap-1.5">
          <li
            v-for="(sidelink, index) in sideLinks"
            :key="index"
            :class="
              twMerge(
                'text-right text-white hover:opacity-70',
                layoutConfig.addStyle.sideLink,
              )
            "
          >
            <a :href="sidelink.link">{{ sidelink.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="main--container col-span-full xl:col-span-9 h-[inherit] flex flex-col gap-2 items-center justify-center"
    >
      <div
        :class="
          twMerge(
            'login--container w-[85%] md:w-[670px] h-[90%] md:h-[680px] flex flex-col justify-center items-center gap-y-6 rounded-[20px] border border-mercury-300',
            layoutConfig.addStyle.login,
          )
        "
      >
        <div
          class="icon--container flex flex-col gap-4 justify-center items-center"
        >
          <slot name="icon"></slot>
          <SecondTitle
            :title="layoutConfig.title"
            :add-style="layoutConfig.addStyle.loginTitle"
          />
        </div>
        <div class="input-container w-full px-6">
          <slot name="form"></slot>
        </div>
      </div>
      <div
        class="line-links--container flex flex-row w-[85%] md:w-[670px] h-auto justify-center lg:justify-end gap-3 lg:pr-6"
      >
        <Sh3MiniLink
          v-for="(minilink, index) in miniLinks"
          :key="index"
          :config="minilink"
          :add-style="layoutConfig.addStyle.miniLinksStyle"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { twMerge } from "tailwind-merge";
import * as config from "./constants";

import { SecondTitle } from "../Typography";
import { Sh3MiniLink } from "../Links";

defineProps({
  layoutConfig: {
    type: Object as PropType<config.Config>,
    default: () => {
      return {
        addStyle: {
          side: "",
          sideMenu: "",
          sideLink: "",
          login: "",
          loginTitle: "",
          miniLinksStyle: "",
        },
        title: {
          default: "Acesse sua conta",
        },
      };
    },
  },
  sideLinks: {
    type: Array<config.SideLink>,
    default: () => {
      return [
        {
          label: "",
          link: "/",
        },
      ];
    },
  },
  miniLinks: {
    type: Array<config.MiniLink>,
    default: () => {
      return [
        {
          label: "",
          route: "/",
          style: "",
        },
      ];
    },
  },
});
</script>
