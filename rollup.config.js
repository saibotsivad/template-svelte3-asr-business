import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import configuration from './configuration.js'
import json from 'rollup-plugin-json'
import livereload from 'rollup-plugin-livereload'
import resolve from 'rollup-plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import visualizer from 'rollup-plugin-visualizer'

const production = !process.env.ROLLUP_WATCH

export default [
	{
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
	},
	{
		input: 'src/node_modules/app/webapp.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'asr',
			file: 'public/bundle.js'
		},
		plugins: [
			svelte({
				// enable run-time checks when not in production
				dev: !production,
				// we'll extract any component CSS out into
				// a separate file — better for performance
				css: css => {
					css.write('public/bundle.css')
				}
			}),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration —
			// consult the documentation for details:
			// https://github.com/rollup/rollup-plugin-commonjs
			resolve({
				browser: true,
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			commonjs(),

			// Watch the `asset` directory and refresh the
			// browser on changes when not in production
			!production && livereload('public'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify and build bundle stats
			production && terser(),
			production && visualizer({
				filename: './public/stats.html',
				title: configuration.title
			})
		],
		watch: {
			clearScreen: false
		}
	},
	{
		input: 'src/node_modules/app/element/_guide.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'asr',
			file: 'public/guide.js'
		},
		plugins: [
			svelte({
				// enable run-time checks when not in production
				dev: !production,
				// we'll extract any component CSS out into
				// a separate file — better for performance
				css: css => {
					css.write('public/guide.css')
				}
			}),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration —
			// consult the documentation for details:
			// https://github.com/rollup/rollup-plugin-commonjs
			resolve({
				browser: true,
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			commonjs()
		],
		watch: {
			clearScreen: false
		}
	}
]
