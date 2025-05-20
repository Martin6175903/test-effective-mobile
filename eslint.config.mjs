import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.node },
    extends: [
      tseslint.configs.recommended
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
]);
