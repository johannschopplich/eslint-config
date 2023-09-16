# ESLint Config

> Sharable ESLint config for my repositories with a focus on code reproducibility and readability.

I was switching between different ESLint configs for my projects. Most of the time [Anthony Fu](https://github.com/antfu)'s set of rules was the best fit. He is [proactively advocating using ESLint for formatting](https://antfu.me/posts/why-not-prettier), which I don't agree with. I prefer to use [Prettier](https://prettier.io) for formatting and ESLint for linting.

Thus, the day has come to create my own ESLint config. My goal is to find the middle ground between as little rules as possible and as many rules as necessary. For example, I prefer strictly ordered module and type imports.

Inspirations are drawn from:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@nuxt/eslint-config](https://github.com/nuxt/eslint-config)
- [eslint-config-unjs](https://github.com/unjs/eslint-config)

## Included Rules

- ESLint & [@typescript-eslint](https://typescript-eslint.io) recommendations
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- Some [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) rules

> [!NOTE]
> This ESLint config is unopinionated about code styling. [Prettier](https://prettier.io) is recommended as code formatter.

## Installation

```bash
# pnpm
pnpm add -D eslint prettier @byjohann/eslint-config

# npm
npm install -D eslint prettier @byjohann/eslint-config

# yarn
yarn add -D eslint prettier @byjohann/eslint-config
```

> [!NOTE]
> Installing Prettier is optional. Omit the `prettier` package if you don't want to use it.

## Usage

Create a `.eslintrc` file in the root of your project with the following content:

```json
{
  "extends": "@byjohann/eslint-config"
}
```

To enable auto-applied linting and formatting on save in VSCode, add the following to your project's local `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact", "vue"]
}
```

To force your fellow developers to use the same VSCode extensions as you, add the following to your project's local `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "Vue.volar"
  ]
}
```

> [!NOTE]
> If you're not using Vue, remove the `Vue.volar` extension from the list.

## License

MIT
