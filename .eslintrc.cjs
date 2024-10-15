/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@unocss",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["src/pages/**/*.vue", "src/layouts/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
