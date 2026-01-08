import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',

      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'no-mixed-spaces-and-tabs': 'off',

      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'semi-style': ['error', 'last'],

      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single'],

      indent: ['error', 2],

      'comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ],

      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],

      'no-console': ['error', { allow: ['warn', 'error', 'info'] }]
    }
  },

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ])
])

export default eslintConfig