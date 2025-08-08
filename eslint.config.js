import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ignores: ["eslint.config.js"], // 忽略 ESLint 配置文件本身
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // 基础推荐规则
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "react/react-in-jsx-scope": "off"
    },
  },
  {
    // 为 eslint.config.js 文件单独配置规则（不使用 TypeScript 类型检查）
    files: ["eslint.config.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
];
