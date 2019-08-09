import { writeFileSync } from 'fs'
import configuration from './configuration.js'

writeFileSync(
	'./public/manifest.webmanifest',
	JSON.stringify(
		{
			name: configuration.title,
			short_name: configuration.shortName,
			start_url: '.',
			display: 'standalone',
			background_color: configuration.backgroundColor,
			theme_color: configuration.themeColor,
			description: configuration.description,
			icons: configuration.icons
		},
		undefined,
		2
	),
	{ encoding: 'utf8' })
