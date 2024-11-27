import tailwindTheme from "./src/theme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', ':root[class="app-dark"]'],
  content: [
    "./public/index.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    ...tailwindTheme,
  },
  // plugins: [require("flowbite/plugin"), require("@vueform/vueform/tailwind")],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-primeui")],
};
