import { writeFileSync } from 'fs'
import glob from 'glob'

const files = glob
	.sync('asset/**', {
		cwd: './public',
		nodir: true
	})

files.push(...[
	'bundle.css',
	'bundle.css.map',
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
