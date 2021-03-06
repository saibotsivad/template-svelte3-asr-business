import { writeFileSync } from 'fs'
import glob from 'glob'

const files = glob
	.sync('asset/**', {
		cwd: './public',
		nodir: true
	})

const styles = process.env.DEVELOP
	? [
		'global.css',
		'global.css.map',
		'bundle.css',
		'bundle.css.map',
	]
	: [
		'global.min.css',
		'global.min.css.map',
		'bundle.min.css',
		'bundle.min.css.map',
	]
files.push(...styles)

files.push(...[
	'bundle.js',
	'bundle.js.map',
	'serviceworker-lists.json',
	'serviceworker.js',
	'serviceworker.js.map'
])

writeFileSync(
	'./public/serviceworker-lists.json',
	JSON.stringify(
		{
			// TODO can you remove the absolute path?
			cacheableFiles: files.map(file => `/${file}`),
			cacheName: `cacheSvelteAsrBusinessApp${new Date().getTime()}`,
			prefetchCacheableUrls: [
				// Whatever additional resources that should
				// be pre-fetched to improve app performance.
				// Look at the service worker code for details.
			]
		},
		undefined,
		2
	),
	{ encoding: 'utf8' }
)
