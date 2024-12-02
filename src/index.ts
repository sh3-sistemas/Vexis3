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
import ToastService from "primevue/toastservice";

/** Toastification Config. */
import Toast from "vue-toastification";
import { toastOptions } from "./services/toast/notification/types";

import Vueform from "@vueform/vueform";
import vueformConfig from "../vueform.config";

export default {
  install: (app: App) => {
    app.use(Vueform, vueformConfig);
    app.use(PrimeVue, {
      pt: vexis3,
      theme: "none",
      ripple: true,
    });

    app.directive("tooltip", Tooltip);
    app.use(ConfirmationService);
    app.use(ToastService);

    app.use(Toast, toastOptions);

    for (const key in components) {
      // @ts-expect-error components defined by any
      app.component(key, components[key]);
    }
  },
} satisfies Plugin;

export * from "./components";
export * from "./services";
export * from "./types";
