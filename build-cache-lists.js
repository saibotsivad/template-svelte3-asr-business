import { writeFileSync } from 'fs'
import glob from 'glob'

const files = glob.sync('**', {
	cwd: './public',
	nodir: true
})

files.push(...[
	'service-worker.js',
	'service-worker.js.map'
])

writeFileSync(
	'./public/service-worker.json',
	JSON.stringify(
		{
			cacheableFiles: files.map(file => `/${file}`),
			cacheName: `cacheSvelteAsrBusinessApp${new Date().getTime()}`,
			prefetchCacheableUrls: [
				// whatever sort of additional resources that should
				// be pre-fetched, to improve app performance
			]
		},
		undefined,
		2
	),
	{ encoding: 'utf8' }
)
