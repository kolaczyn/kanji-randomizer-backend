import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist", "**/lib"],
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"), {
    rules: {
        "no-var": "error",

        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        }],

        semi: "off",
        "no-unused-vars": "off",
        "no-console": "off",
        camelcase: "error",
        "prefer-const": "error",
    },
}];