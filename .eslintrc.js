module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json",
  ],
  rules: {
    // override/add rules settings here, such as:
    "vue/multi-word-component-names": "off",
    "vue/script-setup-uses-vars": 1,
    "vue/no-undef-components": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
