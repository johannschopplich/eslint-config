/* eslint-disable unicorn/prefer-module */

/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    parser: {
      js: "espree",
      jsx: "espree",
      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser",
    },
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { node: true },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  ignorePatterns: ["*.d.ts", "dist"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: { extensions: [".js", ".mjs", ".cjs"] },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts", "*.vue"],
      rules: {
        // The core `no-unused-vars` rules (in the `eslint:recommended` ruleset)
        // does not work with type definitions.
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",

        // Imports
        "import/order": "error",
        "import/first": "error",
        "import/no-mutable-exports": "error",
        "import/no-unresolved": "off",
        "import/no-self-import": "error",
        "import/named": "off",
        "sort-imports": [
          "error",
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            allowSeparatedGroups: false,
          },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", disallowTypeAnnotations: false },
        ],

        // ES6
        "no-var": "error",
        "prefer-const": [
          "error",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true,
          },
        ],
        "object-shorthand": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",

        // Unicorns
        "unicorn/error-message": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-number-properties": "error",
        "unicorn/no-new-array": "error",
      },
    },
    {
      files: ["*.vue"],
      rules: {
        // Include TypeScript eslint rules in *.vue files.
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
        "constructor-super": "off", // ts(2335) & ts(2377)
        "getter-return": "off", // ts(2378)
        "no-const-assign": "off", // ts(2588)
        "no-dupe-args": "off", // ts(2300)
        "no-dupe-class-members": "off", // ts(2393) & ts(2300)
        "no-dupe-keys": "off", // ts(1117)
        "no-func-assign": "off", // ts(2539)
        "no-import-assign": "off", // ts(2539) & ts(2540)
        "no-new-symbol": "off", // ts(7009)
        "no-obj-calls": "off", // ts(2349)
        "no-redeclare": "off", // ts(2451)
        "no-setter-return": "off", // ts(2408)
        "no-this-before-super": "off", // ts(2376)
        "no-undef": "off", // ts(2304)
        "no-unreachable": "off", // ts(7027)
        "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
        "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
        "prefer-const": "error", // ts provides better types with const
        "prefer-rest-params": "error", // ts provides better types with rest args over arguments
        "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply

        "vue/no-v-html": "off",
        "vue/multi-word-component-names": "off",
        "vue/block-order": [
          "error",
          {
            order: ["script", "template", "style"],
          },
        ],
        "vue/block-tag-newline": [
          "error",
          {
            singleline: "always",
            multiline: "always",
          },
        ],
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/custom-event-name-casing": ["error", "camelCase"],
        "vue/define-macros-order": [
          "error",
          {
            order: [
              "defineOptions",
              "defineProps",
              "defineEmits",
              "defineSlots",
            ],
          },
        ],
      },
    },
  ],
};
