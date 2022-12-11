module.exports = {
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  globals: {
    $: true,
    google: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'comma-dangle': 0,
    'no-param-reassign': 0,
    camelcase: 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-new': 0,
    'consistent-return': 0,
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 100,
        singleQuote: true,
        tabWidth: 2,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
  },
};
