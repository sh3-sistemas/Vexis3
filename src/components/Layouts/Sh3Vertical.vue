<template>
  <div
    class="layout-container h-screen grid grid-cols-12 grid-flow-col auto-rows-auto gap-0.5"
  >
    <div
      :class="
        twMerge(
          'side-container md:col-span-full lg:col-span-3 h-fit lg:h-full hidden md:inline-flex lg:flex lg:flex-col py-6 lg:py-24 bg-gray-700',
          layoutConfig.addStyle.side
        )
      "
    >
      <div
        class="img-container h-fit lg:grow block lg:flex items-start justify-center"
      >
        <slot name="logo"></slot>
      </div>
      <div
        :class="
          twMerge(
            'links-container grow lg:grow-0 flex justify-end items-center px-12',
            layoutConfig.addStyle.sideMenu
          )
        "
      >
        <ul class="flex flex-col h-auto list-none gap-1.5">
          <li
            v-for="(sidelink, index) in sideLinks"
            v-bind:key="index"
            :class="
              twMerge(
                'text-right text-white hover:opacity-70',
                layoutConfig.addStyle.sideLink
              )
            "
          >
            <a :href="sidelink.link">{{ sidelink.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="main-container col-span-full lg:col-span-9 h-full md:h-fit lg:h-full flex flex-col gap-1 items-center justify-center"
    >
      <div
        :class="
          twMerge(
            'login-container w-[85%] lg:w-[48%] h-auto md:h-[60%] lg:h-[70%] flex flex-col justify-center items-center py-8 lg:py-0 gap-y-6 rounded-[20px] border border-gray-200',
            layoutConfig.addStyle.login
          )
        "
      >
        <div
          class="icon-container flex flex-col gap-4 justify-center items-center"
        >
          <slot name="icon"></slot>
          <SecondTitle
            :title="layoutConfig.title"
            :addStyle="layoutConfig.addStyle.loginTitle"
          />
        </div>
        <div class="input-container w-full px-6">
          <slot name="form"></slot>
        </div>
      </div>
      <div
        class="line-links flex flex-row w-[85%] lg:w-[48%] h-auto justify-center lg:justify-end gap-3 lg:pr-6"
      >
        <Sh3MiniLink
          v-for="(minilink, index) in miniLinks"
          v-bind:key="index"
          :config="minilink"
          :addStyle="layoutConfig.addStyle.miniLinksStyle"
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
