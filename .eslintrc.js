module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint/eslint-plugin'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'react/jsx-uses-react': 'off',
    'no-unused-vars': 'warn',
  },
};
