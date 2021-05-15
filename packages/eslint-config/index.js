module.exports = {
	root: true,
	plugins: ['@typescript-eslint', 'import', 'sonarjs', 'unicorn', 'eslint-plugin-tsdoc'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		quotes: 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		semi: 'off',
		'@typescript-eslint/semi': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'eol-last': ['error', 'always'],
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true,
			},
		],
		'max-len': [
			'error',
			{
				code: 120,
				comments: 120,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
			},
		],
		'no-underscore-dangle': 'off',
		'no-restricted-syntax': 'off',
		'no-spaced-func': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'no-irregular-whitespace': 'error',
		indent: 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				flatTernaryExpressions: false,
				ignoredNodes: ['TSTypeParameterInstantiation'],
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
			},
		],
		'one-var': ['error', 'never'],
		'no-cond-assign': ['error', 'except-parens'],
		'comma-dangle': ['error', 'always-multiline'],
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'new-parens': ['error', 'always'],
		'no-caller': 'error',
		'no-constant-condition': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'no-eval': 'error',
		'@typescript-eslint/no-implied-eval': 'off',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-fallthrough': 'error',
		'no-inner-declarations': 'error',
		'no-unused-labels': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'no-regex-spaces': 'error',
		'no-self-compare': 'error',
		'no-sparse-arrays': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-negated-in-lhs': 'error',
		'no-new-wrappers': 'error',
		'no-self-assign': 'error',
		'no-this-before-super': 'error',
		'no-with': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'no-trailing-spaces': [
			'error',
			{
				ignoreComments: true,
			},
		],
		'no-undef-init': 'error',
		'no-unsafe-finally': 'error',
		'padded-blocks': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
		'brace-style': ['error', '1tbs'],
		curly: ['error', 'all'],
		'no-return-await': 'off',
		'@typescript-eslint/return-await': ['error', 'never'],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
			{
				selector: 'class',
				format: ['PascalCase'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
			},
		],
		'handle-callback-err': ['error', '^error$'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'no-array-constructor': 'error',
		'no-unreachable': 'error',
		'no-multi-spaces': 'error',
		'no-nested-ternary': 'error',
		'no-unneeded-ternary': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'sonarjs/no-duplicate-string': 'off',
		'sort-imports': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
			},
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'unicorn/prefer-number-properties': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/import-style': 'off',
		'unicorn/new-for-builtins': 'off',
		'unicorn/prevent-abbreviations': [
			'warn',
			{
				replacements: {
					args: false,
					arg: false,
					pkg: false,
				},
			},
		],
	},
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'@typescript-eslint/explicit-member-accessibility': 'error',
				'tsdoc/syntax': 'warn',
			},
		},
	],
};
