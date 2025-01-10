import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
    baseDirectory: process.cwd(),
    resolvePluginsRelativeTo: process.cwd()
});

export default [
  js.configs.recommended,
  {
    rules: {
      'indent': ['error', 4],
      'no-unused-vars': 'error',
      'semi': ['warn', 'always'],
      'quotes': ['error', 'single'],
      'no-console': 'off',
    },
    env: {
        node: true,
        browser: false,
        es2021: true,
    }
  },
];