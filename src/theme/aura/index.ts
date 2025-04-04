import type { VexisOptions } from "@/types";
import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import { actions, sh3 } from "../colors";
import {
  badge,
  button,
  inlinemessage,
  message,
  password,
  progressspiner,
  tag,
  toast,
} from "./components";

export const defineTheme = (options: VexisOptions) =>
  definePreset(Aura, {
    primitive: {
      // Creates primitive tokens for our default colors
      ...sh3,
      ...actions,
    },
    semantic: {
      // Defines the primary color based on application
      ...options.theme.colors,

      // Customizes the default Aura preset
      colorScheme: {
        light: {
          surface: {
            0: "#ffffff",
            50: "{mercury.50}",
            100: "{mercury.100}",
            200: "{mercury.200}",
            300: "{mercury.300}",
            400: "{mercury.400}",
            500: "{mercury.500}",
            600: "{mercury.600}",
            700: "{mercury.700}",
            800: "{mercury.800}",
            900: "{mercury.900}",
            950: "{mercury.950}",
          },
          primary: {
            color: "{primary.500}",
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
        formField: {
          background: "{surface.0}",
          disabledBackground: "{surface.200}",
          filledBackground: "{surface.50}",
          filledHoverBackground: "{surface.50}",
          filledFocusBackground: "{surface.50}",
          borderColor: "{surface.300}",
          hoverBorderColor: "{surface.400}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{ruby.400}",
          color: "{surface.700}",
          disabledColor: "{surface.500}",
          placeholderColor: "{surface.500}",
          invalidPlaceholderColor: "{ruby.600}",
          floatLabelColor: "{surface.500}",
          floatLabelFocusColor: "{primary.600}",
          floatLabelActiveColor: "{surface.500}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)",
        },
      },
    },
    components: {
      badge,
      button,
      inlinemessage,
      message,
      password,
      progressspiner,
      tag,
      toast,
    },
  });
