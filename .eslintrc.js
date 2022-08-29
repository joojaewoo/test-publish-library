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
        'no-shadow': 1,
        'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
        'vue/html-closing-bracket-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'never',
          },
        ],
      },
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
      },
    },
    {
      files: ['src/**/*.*'],
      rules: {
        ...rules,
      },
    },
  ],
};
