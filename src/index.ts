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

/** Vueform Config. */
import Vueform from "@vueform/vueform";
import vueformConfig from "../vueform.config";

/** Apollo Config. */
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
        ...options.theme.colors,
        colorScheme: {
          light: {
            primary: {
              color: "{primary.700}",
              contrastColor: "#ffffff",
              hoverColor: "{primary.600}",
              activeColor: "{primary.700}",
            },
            highlight: {
              background: "{primary.50}",
              focusBackground: "{primary.100}",
              color: "{primary.700}",
              focusColor: "{primary.800}",
            },
            common: {
              maskColor: "{primary.700}",
            },
          },
        },
        sky: {
          50: "{primary.50}",
          100: "{primary.100}",
          200: "{primary.200}",
          300: "{primary.300}",
          400: "{primary.400}",
          500: "{primary.500}",
          600: "{primary.600}",
          700: "{primary.700}",
          800: "{primary.800}",
          900: "{primary.900}",
          950: "{primary.950}",
        },
        green: {
          50: "#f4faeb",
          100: "#e6f4d3",
          200: "#c8e5a9",
          300: "#a8d77a",
          400: "#85c14f",
          500: "#67a632",
          600: "#548a26",
          700: "#446f23",
          800: "#36561e",
          900: "#283f19",
          950: "#15250b",
        },
        red: {
          50: "#FDEAEA",
          100: "#F6CDCD",
          200: "#EAAAAA",
          300: "#DA7A79",
          400: "#C75751",
          500: "#A1272B",
          600: "#851919",
          700: "#611114",
          800: "#45080B",
          900: "#2F0204",
          950: "#1A0102",
        },
        orange: {
          50: "#FFF4DE",
          100: "#FEE5B5",
          200: "#FED78F",
          300: "#FFC363",
          400: "#FCB33D",
          500: "#FB9F25",
          600: "#F48911",
          700: "#D06807",
          800: "#B34D09",
          900: "#863210",
          950: "#451508",
        },
        slate: {
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
