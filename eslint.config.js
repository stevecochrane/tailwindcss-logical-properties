const pluginJest = require('eslint-plugin-jest');

module.exports = [
  {
    files: [
      '**/*.test.js'
    ],
    plugins: {
      jest: pluginJest
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  {
      ignores: ["coverage/*"]
  }
];
