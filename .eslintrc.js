module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    React: 'readonly',
    JSX: 'readonly',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
  rules: {
    '@typescript-eslint/no-floating-promises': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-unsafe-assignment': 0,
    'no-underscore-dangle': 0,
    'react/button-has-type': 0,
    'import/no-anonymous-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    'prettier/prettier': [1, { endOfLine: 'auto' }],
  },
};
