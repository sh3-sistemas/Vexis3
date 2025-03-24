/* eslint-disable @typescript-eslint/no-require-imports */
import tailwindTheme from "./src/theme";
import PrimeUI from "tailwindcss-primeui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "vx-",
  darkMode: ["selector", ':root[class="app-dark"]'],
  safelist: ["dark"],

  content: [
    "./public/index.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
    "./vueform.config.js",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.{js,vue}",
  ],
  theme: {
    ...tailwindTheme,
  },
  plugins: [
    PrimeUI,
    require("flowbite/plugin"),
    require("@vueform/vueform/tailwind"),
    require("tailwindcss-animate"),
  ],
};
