module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '/node_modules/**/*',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'quotes': ['error', 'single'],
    'require-jsdoc': 0,
    'no-unused-vars': 'warn',
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'new-cap': 0,
    'max-len': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
