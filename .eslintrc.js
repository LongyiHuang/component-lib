
module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['plugin:vue/essential', 'standard'],
	rules: {
		"semi": "off",
		"indent": "off",
		"no-multiple-empty-lines": "off",
		"vetur.validation.template": "off",
		"no-undef": "off",
		"no-new": "off",
		"no-trailing-spaces": "off",
		"eqeqeq": "off",
		"quotes": "off",
		"no-tabs": "off",
		"no-mixed-spaces-and-tabs": "off",
		"one-var": "off",
		"eol-last": "off",
		"no-console": "off",
		"dot-notation": "off",
		"no-async-promise-executor": "off",
		"handle-callback-err": [
			"error",
			"err"
		],
		"no-case-declarations": "off",
		"import/no-duplicates": "off"
	}
}

