import { pallet, actions, modules } from "./pallets";

export default {
  fontFamily: {
    sans: ['"Lato"', "sans-serif"],
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
  },
  animation: {
    overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
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
    },
  },
};
