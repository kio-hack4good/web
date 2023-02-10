module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort", "prettier"],
  globals: {
    Promise: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "comma-dangle": ["off"],
    "no-shadow": "off",
    "no-catch-shadow": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000"], ["^@?\\w"], ["^src"], ["^"], ["^\\."], ["^.+\\u0000$"]],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
