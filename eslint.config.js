import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import { viteConfigObj } from './vite-eslint.config.mjs';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      eslintPluginPrettierRecommended
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },

    settings: {
      'import/resolver': {
        vite: {
          viteConfig: viteConfigObj,
        },
      },
    },
    rules: {
      // не ругаемся на Vite/SVGR импорты вида *.svg?react
      'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
      'import/newline-after-import': 'error',
    },
  }
]);