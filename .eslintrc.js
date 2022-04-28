module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    es6: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'global-require': 0,
    'no-empty-function': 'off',
    'no-use-before-define': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': 'off',
    'no-unused-expressions': [
      'error',
      {allowTernary: true, allowShortCircuit: true},
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unescaped-entities': ['error', {forbid: ['>', '}']}],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts', '.js'],
      },
    ],
  },
};
