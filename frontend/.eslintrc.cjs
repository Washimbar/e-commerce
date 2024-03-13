module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		// Enforce camelCase naming convention
		"@typescript-eslint/naming-convention": [
			"warn",
			{
				selector: "property",
				format: ["camelCase", "snake_case", "PascalCase"],
			},
			{
				selector: "enumMember",
				format: ["PascalCase"],
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],
		// Require explicit return types on functions and class methods
		// "@typescript-eslint/explicit-function-return-type": "error",
		// Enforce consistent spacing before function parentheses
		"space-before-function-paren": ["error", "never"],
		// Require or disallow trailing commas
		"comma-dangle": ["error", "always-multiline"],
		// Enforce consistent indentation
		indent: ["error", 2],
		// Require or disallow semicolons instead of ASI
		semi: ["error", "always"],
		// Enforce consistent quote style
		quotes: ["error", "double"],
		// Enforce consistent spacing inside braces
		"object-curly-spacing": ["error", "always"],
		// Enforce consistent spacing inside array brackets
		"array-bracket-spacing": ["error", "always"],
		// Require or disallow spacing between function identifiers and their invocations
		"func-call-spacing": ["error", "never"],
		// Enforce consistent spacing before or after unary operators
		"space-unary-ops": ["error", { words: true, nonwords: false }],
		// Require or disallow trailing commas in object literals
		"comma-dangle": ["error", "always-multiline"],
		// Enforce consistent spacing after colons in object literals
		"key-spacing": ["error", { afterColon: true }],
		// Enforce consistent spacing inside computed property brackets
		"computed-property-spacing": ["error", "never"],
		// Enforce consistent spacing after the // or /* in a comment
		"spaced-comment": ["error", "always"],
	},
};
