module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'space-infix-ops': 'error',        // добавлено
    'eol-last': ['error', 'always']    // добавлено
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        'jest/prefer-expect-assertions': 'off'
      }
    }
  ]
};
