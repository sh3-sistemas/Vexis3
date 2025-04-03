import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";

import type { App, Plugin } from "vue";
import * as components from "./components";

/** PrimeVue Config. */
import PrimeVue from "primevue/config";

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
import type { VexisOptions } from "./types";
import { defineTheme } from "./theme/aura";

export default {
  install: (app: App, options: VexisOptions) => {
    app.use(Vueform, vueformConfig);
    app.use(PrimeVue, {
      theme: {
        preset: defineTheme(options),
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
