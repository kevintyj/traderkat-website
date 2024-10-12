import antfu from '@antfu/eslint-config';

export default antfu(
	{
		unocss: true,
		typescript: true,
		stylistic: {
			quotes: 'single',
			indent: 'tab',
			semi: 'always',
		},
		ignores: [
			'**/dist',
			'.idea',
		],
		overrides: {
			typescript: {
				'ts/consistent-type-definitions': ['error', 'type'],
			},
		},
	},
	{
		rules: {
			'style/no-tabs': ['error', { allowIndentationTabs: true }],
			'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'style/array-bracket-newline': ['error', { multiline: true }],
			'style/array-element-newline': ['error', 'consistent'],
            // Delimiter override for ESlint stablity
			'style/member-delimiter-style': ['warn', { multiline: { delimiter: 'none' } }],
			'antfu/top-level-function': 'off',
		},
	},
	{
		files: ['tsconfig.json', 'tsconfig.node.json', 'package.json'],
		rules: {
			'jsonc/sort-keys': 'off',
		},
	},
);
