const rules = {
  'no-param-reassign': 'off',
  'no-underscore-dangle': 'off',
  'prefer-object-spread': 'off',
  'prefer-destructuring': 'off',
  'import/prefer-default-export': 'off',
  'guard-for-in': 'off',
  'no-restricted-syntax': 'off',
  'import/no-extraneous-dependencies': 'off',
  'no-console': 'off',
  'no-restricted-globals': ['error', 'window', 'document'],
  'react/jsx-filename-extension': 'off',
  'jsx-a11y/label-has-associated-control': 'off',
  'react/no-array-index-key': 'off',
  'react/prop-types': 'off',
  'react/jsx-props-no-spreading': 'off',
};
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
      rules,
    },
    {
      files: ['**/*.jsx', 'src/react/*.js'],
      plugins: ['react'],
      rules,
    },
    {
      files: ['**/*.vue', 'src/vue/**/*.vue'],
      plugins: ['vue'],
      extends: ['plugin:vue/recommended'],
      rules: {
        indent: ['error', 2],
        'no-tabs': 0,
        'vue/html-indent': ['error', 2],
        'vue/script-indent': ['error', 2],
        'max-len': ['error', 120],
        'import/extensions': [
          'warn',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            mjs: 'never',
            vue: 'always',
          },
        ],
        'import/no-unresolved': [
          'error',
          {
            ignore: [''],
          },
        ],
        'no-shadow': 1,
        'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
        'vue/html-closing-bracket-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'never',
          },
        ],
        'no-param-reassign': 1,
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/no-this-alias': 1,
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/no-unused-vars': 'error',
      },
      parser: 'vue-eslint-parser',
    },
    {
      files: ['src/**/*.*'],
      rules: {
        ...rules,
        'import/extensions': [2, 'ignorePackages', { js: 'always' }],
      },
    },
  ],
};
