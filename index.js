var plugins = [
	['@babel/plugin-proposal-object-rest-spread', {
		// useBuiltIns: true,
		// loose: true
	}],
	'@babel/plugin-transform-block-scoped-functions',
	['@babel/plugin-transform-block-scoping', {
		throwIfClosureRequired: true
	}],
	['@babel/plugin-transform-spread', {
		// loose: true
	}],
	['@babel/plugin-transform-destructuring', {
		// useBuiltIns: true,
		// loose: true
	}],
	'@babel/plugin-transform-parameters',
	'@babel/plugin-transform-shorthand-properties',
	['module-resolver', {
		alias: {
			'buffer-from': '@bit/myshkouski.espruino.modules.buffer-from',
			events: '@bit/myshkouski.espruino.modules.events',
			stream: '@bit/myshkouski.espruino.modules.stream',
			util: '@bit/myshkouski.espruino.modules.util'
		}
	}],
	['module:fast-async', {
		compiler: {
			noRuntime: true
		}
	}]
]

module.exports = function () {
	return {
		plugins: plugins
	}
}