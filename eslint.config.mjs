import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.node },
    extends: [tseslint.configs.recommended],
    plugins: {
      eslintPluginPrettier,
      eslintConfigPrettier
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
])
