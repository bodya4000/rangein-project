import { defineFlatConfig } from 'eslint-define-config'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'

export default defineFlatConfig([
  {
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
    },
  },
])
