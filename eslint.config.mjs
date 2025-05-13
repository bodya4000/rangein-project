import { defineFlatConfig } from 'eslint-define-config'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginImport from 'eslint-plugin-import'

export default defineFlatConfig([
  {
    ignores: ['**/*.d.ts', '**/vite.config.ts', '**/eslint.config.*', '**/tsconfig.*', '**/*.svg'],
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
      react: pluginReact,
      import: pluginImport,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tseslint.configs.recommended[0].rules,
      ...pluginReact.configs.recommended.rules,
      'prettier/prettier': ['warn', { endOfLine: 'lf' }],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_+$', varsIgnorePattern: '^_+$' }],

      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
])
