module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-param-reassign": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "space-before-function-paren": "off",
    "class-methods-use-this": "off",
    "import/order": "off",
    "arrow-parens": "off",
    "indent": ["error", 4],
    "semi": ["error", "never"],
    "camelcase": "off",
    "object-curly-newline": ["error", {
      multiline: true
    }],

    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": [1, 4],
    "react/state-in-constructor": 0,
    "react/no-unused-state": 0,
    "react/jsx-indent-props": [1, 4],
    "react/sort-comp": 0,
    "react/prop-types": 0,
  },
};
