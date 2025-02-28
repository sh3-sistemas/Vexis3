import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";

import type { App, Plugin } from "vue";
import * as components from "./components";

/** PrimeVue Config. */
import PrimeVue from "primevue/config";
import vexis3 from "@/theme/vexis3";
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

export default {
  install: (
    app: App,
    options: {
      apollo: {
        clients: Record<string, any>;
      };
      moduleUrl: string;
    },
  ) => {
    app.use(Vueform, vueformConfig);
    app.use(PrimeVue, {
      pt: vexis3,
      theme: "none",
      ripple: false,
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
