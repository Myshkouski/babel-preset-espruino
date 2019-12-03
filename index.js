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
	'@babel/plugin-transform-arrow-functions',
	'@babel/plugin-transform-parameters',
	'@babel/plugin-transform-shorthand-properties',
	'@babel/plugin-transform-template-literals',
	['module-resolver', {
		alias: {
			'buffer-from': '@alexeimyshkouski/espruino/modules/buffer-from',
			events: '@alexeimyshkouski/espruino/modules/events',
			stream: '@alexeimyshkouski/espruino/modules/stream',
			util: '@alexeimyshkouski/espruino/util'
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