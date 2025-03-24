import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";

import type { App, Plugin } from "vue";
import * as components from "./components";

/** PrimeVue Config. */
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Tooltip from "primevue/tooltip";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import Ripple from "primevue/ripple";

/** Toastification Config. */
import Toast from "vue-toastification";
import { toastOptions } from "./services/toast/notification/types";

import Vueform from "@vueform/vueform";
import vueformConfig from "../vueform.config";

import { ApolloClient } from "@apollo/client";
import type { BaseColorPallet } from "./types";
import { definePreset } from "@primevue/themes";

export default {
  install: (
    app: App,
    options: {
      apollo: {
        clients: Record<string, any>;
      };
      moduleUrl: string;
      theme: {
        colors?: BaseColorPallet;
      };
    },
  ) => {
    app.use(Vueform, vueformConfig);
    const VexisPreset = definePreset(Aura, {
      semantic: {
        primary: {
          50: "#fef3f2",
          100: "#ffe2e1",
          200: "#ffcbc8",
          300: "#ffa7a2",
          400: "#ff908a",
          500: "#fc766f",
          600: "#f4483f",
          700: "#bf352e",
          800: "#9d1e17",
          900: "#821f1a",
          950: "#470b08",
        },
        surface: {
          50: "#f6f7f8",
          100: "#E9EBEE",
          200: "#CFD3DA",
          300: "#B7BDC9",
          400: "#A2A9B8",
          500: "#868EA0",
          600: "#5E6373",
          700: "#40434D",
          800: "#2E2F37",
          900: "#222327",
          950: "#101010",
        },
      },
    });

    app.use(PrimeVue, {
      theme: {
        preset: VexisPreset,
        options: {
          prefix: "p",
          darkModeSelector: false,
          cssLayer: {
            name: "primevue",
            order: "my-app-base, primevue, my-app-utilities",
          },
        },
      },
    });

    app.directive("ripple", Ripple);
    app.directive("tooltip", Tooltip);
    app.use(ConfirmationService);
    app.use(DialogService);
    app.use(ToastService);

    app.use(Toast, toastOptions);

    const { clients } = options.apollo;
    app.provide("moduleUrl", options.moduleUrl);
    app.provide("clients", clients);
    app.provide(ApolloClient, {
      ...clients,
    });

    for (const key in components) {
      // @ts-expect-error components defined by any
      app.component(key, components[key]);
    }
  },
} satisfies Plugin;

export * from "./components";
export * from "./services";
export * from "./types";
export * from "./utils";
