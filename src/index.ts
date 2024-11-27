import "./assets/main.css";

import type { App, Plugin } from "vue";
import * as components from "./components";

/** PrimeVue Config. */
import PrimeVue from "primevue/config";
import vexis3 from "@/theme/vexis3";
import Tooltip from "primevue/tooltip";
import ConfirmationService from "primevue/confirmationservice";

import ToastService from "primevue/toastservice";

export default {
  install: (app: App) => {
    app.use(PrimeVue, {
      pt: vexis3,
      theme: 'none',
      ripple: true
    });

    app.directive("tooltip", Tooltip);
    app.use(ConfirmationService);
    app.use(ToastService);

    for (const key in components) {
      // @ts-expect-error components defined by any
      app.component(key, components[key]);
    }
  },
} satisfies Plugin;

export * from "./components";
export * from "./types";
