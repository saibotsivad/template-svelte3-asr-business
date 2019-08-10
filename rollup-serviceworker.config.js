import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import configuration from './configuration.js'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/node_modules/app/serviceworker.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'asrServiceWorker',
		file: 'public/serviceworker.js'
	},
	plugins: [
		json(),
		resolve({
			browser: true
		}),
		commonjs(),
		// If we're building for production (npm run build
		// instead of npm run dev), minify JS code
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}
