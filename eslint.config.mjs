import path from 'path';
import globals from "globals";
import tseslint from "typescript-eslint";

const __dirname = path.dirname('');


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Apply this configuration to these file types
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, // Merge browser and Node.js globals
    },
  },
  ...tseslint.configs.recommendedTypeChecked, // Apply TypeScript-recommended rules with type-checking
  {
    // Add custom rules or overrides
    rules: {
      "@typescript-eslint/no-floating-promises": "error", // Enable the rule
    },
    // Add parserOptions for TypeScript type-checking
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json", // Path to your tsconfig.json
        tsconfigRootDir: __dirname, // Root directory for TypeScript
      },
    },
  },
];
