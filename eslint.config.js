import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import pluginVitest from "@vitest/eslint-plugin";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

import prettier from "eslint-plugin-prettier/recommended";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**", "**/vexis3/**"],
  },

  // js.configs.recommended,
  // jsdoc.configs["flat/recommended"],
  ...pluginVue.configs["flat/essential"],
  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },
  prettier,
  skipFormatting,
  {
    rules: {
      //jsdoc rules
      // "jsdoc/require-description": "warn",
      // "jsdoc/check-values": "warn",
      "vue/block-lang": ["warn"],

      //vue rules
      "vue/multi-word-component-names": [
        "warn",
        {
          ignores: ["default"],
        },
      ],
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
        },
      ],

      //prettier rules
      "prettier/prettier": ["error"],

      //typescript rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
