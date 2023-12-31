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
  plugins: ["@typescript-eslint", "unicorn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  ignorePatterns: ["dist"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".cjs", ".mjs", ".ts", ".cts", ".mts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts", "*.vue"],
      rules: {
        // The core `no-unused-vars` rules won't work with type definitions.
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",

        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", disallowTypeAnnotations: false },
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
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

        "vue/block-order": [
          "error",
          {
            order: ["script", "template", "style"],
          },
        ],
        "vue/component-name-in-template-casing": [
          "error",
          "PascalCase",
          {
            registeredComponentsOnly: false,
          },
        ],
        "vue/component-options-name-casing": ["error", "PascalCase"],
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
        "vue/dot-notation": ["error", { allowKeywords: true }],
        "vue/eqeqeq": ["error", "smart"],
        "vue/multi-word-component-names": "off",
        "vue/no-dupe-keys": "off",
        "vue/no-empty-pattern": "error",
        "vue/no-irregular-whitespace": "error",
        "vue/no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement",
        ],
        "vue/no-restricted-v-bind": ["error", "/^v-/"],
        "vue/no-setup-props-reactivity-loss": "off",
        "vue/no-sparse-arrays": "error",
        "vue/no-unused-refs": "error",
        "vue/no-useless-v-bind": "error",
        "vue/no-v-html": "off",
        "vue/object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-template": "error",
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/require-default-prop": "off",
        "vue/require-prop-types": "off",
      },
    },
  ],
  rules: {
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
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

    // Imports
    "import/order": "error",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-self-import": "error",

    // Unicorns
    "unicorn/no-array-for-each": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-new-array": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-number-properties": "error",
  },
};
