import buble from 'rollup-plugin-buble';

let pkg = require('./package.json');

let outputConfig = {
	exports: 'named',
	sourcemap: true,
	globals: {
		fs: 'fs',
		path: 'path'
	}
};

export default {
	input: 'src/index.js',
	plugins: [buble()],
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			...outputConfig
		},
		{
			file: pkg.module,
			format: 'es',
			...outputConfig
		},
		{
			name: 'ng-states',
			file: pkg.umd,
			format: 'umd',
			...outputConfig
		}
	]
};
