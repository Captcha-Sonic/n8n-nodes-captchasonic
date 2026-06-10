/**
 * @type {import('@types/eslint').ESLint.ConfigData}
 */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		extraFileExtensions: ['.json'],
	},
	ignorePatterns: ['.eslintrc.js', '**/*.js', '**/node_modules/**', '**/dist/**'],
	plugins: ['n8n-nodes-base'],
	extends: ['plugin:n8n-nodes-base/community'],
	rules: {
		'n8n-nodes-base/community-package-json-name-still-default': 'off',
	},
	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			extends: ['plugin:n8n-nodes-base/community'],
			parser: 'espree', // Use plain JS parser for package.json (avoid TS parser project errors)
			parserOptions: {
				ecmaVersion: 2020,
			},
			rules: {
				'n8n-nodes-base/community-package-json-name-still-default': 'off',
			},
		},
		{
			files: ['./credentials/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			extends: ['plugin:n8n-nodes-base/credentials'],
			rules: {
				'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'off',
				'n8n-nodes-base/cred-class-field-documentation-url-missing': 'off',
			},
		},
		{
			files: ['./nodes/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			extends: ['plugin:n8n-nodes-base/nodes'],
			rules: {
				'n8n-nodes-base/node-resource-description-filename-against-convention': 'off',
				'n8n-nodes-base/node-param-fixed-collection-type-unsorted-items': 'off',
				'n8n-nodes-base/node-param-default-missing': 'off',
				'n8n-nodes-base/node-param-default-wrong-for-options': 'off',
				'n8n-nodes-base/node-param-collection-type-unsorted-items': 'off',
				'n8n-nodes-base/node-param-display-name-miscased': 'off',
			},
		},
	],
};
