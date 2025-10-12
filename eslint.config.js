import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import standard from 'eslint-config-love'
import react from 'eslint-plugin-react'
import pluginRouter from '@tanstack/eslint-plugin-router'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  standard,
  reactHooks.configs.flat.recommended,

  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/*.config.js"
    ]
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module',
        project: ['./tsconfig.app.json']
      },
      globals: {
        ...globals.browser,
      }
    },
    plugins: {
      '@stylistic': stylistic,
      '@tanstack/router': pluginRouter,
      react,
      'react-hooks': reactHooks
    },
    rules: {
      'no-param-reassign': 'off',
      'eslint-comments/require-description': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'arrow-body-style': 'off',
      'promise/avoid-new': 'off',
      'no-console': 'off',
      'max-nested-callbacks': ['error', { max: 5 }],
      'complexity': 'off',

      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/only-throw-error': 'off',
      // '@typescript-eslint/unbound-method': 'off',

      // Core stylistic formatting
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

      // Function / parameter formatting
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/function-call-spacing': ['error', 'never'],

      // Braces and spacing
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/function-paren-newline': 'off',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      '@stylistic/no-trailing-spaces': 'error',

      // Alignment and readability
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

      // React
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-max-props-per-line': ['error', { maximum: 1 }]
    }
  }
]