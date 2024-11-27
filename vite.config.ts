import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), cssInjectedByJsPlugin()],
  build: {
    sourcemap: true,
    target: "esnext",
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "vexis3",
      // the name of the output files when the build is run
      formats: ["es"], // adding 'umd' requires globals set to every external module
      // fileName: (format) => `vexis3.${format}.js`,
      fileName: "vexis3",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        "vue-router",
        "primevue",
        "prime-icons",
        "radix-vue",
        "flowbite",
        "graphql",
      ],
      output: {
        inlineDynamicImports: false,
        // disable warning on src/index.ts using both default and named export
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
