/* Shared eslint configuration. This will be merged with the client and server configurations */

module.exports = {
  root: true,
  // files: ['**/*.ts', '**/*.tsx'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['unused-imports', 'prettier'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    '@typescript-eslint/no-unused-vars': 'off', // Delegate to unused-imports
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  ignorePatterns: ['node_modules/*', 'build/*', '.prettierrc.js'],
};
