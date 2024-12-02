import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import fs from "fs";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const mappings = {
  "vue-toastification": "vue-toastification/dist",
  primevue: "primevue/dist",
  "@vueform": {
    locales: "vueform/locales",
    "plugin-mask": "vueform/plugin-mask",
    tailwind: "vueform/tailwind",
    default: "vueform/dist",
  },
  axios: "axios/dist",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), cssInjectedByJsPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
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
        manualChunks: (id) => {
          if (id.includes("src/theme/")) return "chunks/theme";

          // Caminho para o diretório src/components
          const componentsDir = resolve(__dirname, "src/components");

          // Lê as pastas dentro de src/components
          const directories = fs
            .readdirSync(componentsDir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

          // Itera sobre as pastas para verificar se o id corresponde a alguma delas
          for (const dir of directories) {
            if (id.includes(`/src/components/${dir}/`)) {
              return "chunks/components"; // Retorna o nome do chunk com base na pasta
            }
          }

          if (!id.includes("node_modules")) return null;

          for (const [key, value] of Object.entries(mappings)) {
            if (id.includes(key)) {
              if (typeof value === "string") {
                return value; // Retorna o valor diretamente se não for um objeto
              }

              // Verifica condições específicas para "@vueform"
              for (const [nestedKey, nestedValue] of Object.entries(value)) {
                if (nestedKey !== "default" && id.includes(nestedKey)) {
                  return nestedValue;
                }
              }

              // Retorna o valor padrão de "@vueform" se nenhuma condição específica for atendida
              return value.default;
            }
          }

          return "vendor"; // Retorno padrão se nenhuma correspondência for encontrada
        },
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
