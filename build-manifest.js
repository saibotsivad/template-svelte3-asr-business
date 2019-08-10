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

const browserConfigTemplate = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="asset/mstile-150x150.png"/>
            <TileColor>${configuration.microsoftTileColor}</TileColor>
        </tile>
    </msapplication>
</browserconfig>
`

writeFileSync(
	'./public/browserconfig.xml',
	browserConfigTemplate,
	{ encoding: 'utf8' }
)
