import { pallet, actions, modules } from "./pallets";
import shadcn from "./pallets/shadcn";

export default {
  fontFamily: {
    sans: ['"Lato"', "sans-serif"],
  },
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  keyframes: {
    overlayShow: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    contentShow: {
      from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
      to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
    },
    "accordion-down": {
      from: { height: 0 },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: 0 },
    },
    "collapsible-down": {
      from: { height: 0 },
      to: { height: "var(--radix-collapsible-content-height)" },
    },
    "collapsible-up": {
      from: { height: "var(--radix-collapsible-content-height)" },
      to: { height: 0 },
    },
  },
  animation: {
    overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "collapsible-down": "collapsible-down 0.2s ease-in-out",
    "collapsible-up": "collapsible-up 0.2s ease-in-out",
  },
  extend: {
    gridTemplateColumns: {
      // Simple 16 column grid
      "20": "repeat(20, minmax(0, 1fr))",
      "22": "repeat(22, minmax(0, 1fr))",
      "24": "repeat(24, minmax(0, 1fr))",
    },
    gridColumn: {
      "span-20": "span 20 / span 20",
      "span-22": "span 22 / span 22",
      "span-24": "span 24 / span 24",
    },
    colors: {
      ...pallet,
      ...actions,
      ...modules,
      ...shadcn,
    },
    borderRadius: {
      xl: "calc(var(--radius) + 4px)",
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
};
