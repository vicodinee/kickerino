/* eslint-env node */
module.exports = {
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended"
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', '@typescript-eslint'],
    root: true,
    rules: {
        "prettier/prettier": ["error"],
        "no-console": ["error", { "allow": ["error", "warn"]}]
    },
    settings: {
        react: {
          version: "detect"
        }
     }
};