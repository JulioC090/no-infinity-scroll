import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  // Recommended JavaScript configuration
  eslintJs.configs.recommended,

  // Recommended TypeScript configuration
  ...tseslint.configs.recommended,

  // Disables rules that conflict with Prettier
  prettierConfig,

  // Recommended rules from the Prettier plugin
  prettierPlugin,

  // Directories ignored by ESLint
  {
    ignores: ['node_modules', 'dist', '**/*.{js,cjs}'],
  },

  // Prettier custom rules
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          bracketSameLine: false,
          tabWidth: 2,
          endOfLine: 'auto',
          plugins: [
            '@ianvs/prettier-plugin-sort-imports',
            'prettier-plugin-tailwindcss',
          ],
          /* tailwindStylesheet: './src/popup/index.css', */
          importOrder: [
            '^(react/(.*)$)|^(react$)',
            '^(next/(.*)$)|^(next$)',
            '<THIRD_PARTY_MODULES>',
            '',
            '^types$',
            '^@/types/(.*)$',
            '^@/config/(.*)$',
            '^@/lib/(.*)$',
            '^@/hooks/(.*)$',
            '^@/components/ui/(.*)$',
            '^@/components/(.*)$',
            '^@/styles/(.*)$',
            '^@/app/(.*)$',
            '',
            '^[./]',
          ],
          importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
        },
      ],
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
  },

  // Language and global environment settings
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  {
    plugins: {
      'react-hooks': reactHooks, // Plugin to enforce rules for React Hooks
      'react-refresh': reactRefresh, // Plugin to support React Fast Refresh compatibility
    },
  },

  {
    rules: {
      // Ensures only components (or optionally constants) are exported from modules,
      // to support fast refresh in React development
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
);
