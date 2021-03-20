const path = require("path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "jest", "react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", path.join(__dirname, "src")]],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
  },
};
