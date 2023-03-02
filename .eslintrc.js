module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

// {
//   "extends": ["plugin:vue/vue3-recommended", "plugin:markdown/recommended", "prettier"],
//   "plugins": ["prettier"],
//   "rules": {
//     "prettier/prettier": ["error"],
//     "vue/require-default-prop": 0,
//     "vue/valid-define-props": 0,
//     "vue/html-indent": ["error", 2],
//     "vue/singleline-html-element-content-newline": 0,
//     "vue/component-name-in-template-casing": ["error", "PascalCase"]
//   }
// }
