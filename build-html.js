import { readFileSync, writeFileSync } from 'fs'
import configuration from './configuration.js'
import { render } from 'mustache'

const guideHtml = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Component Guide</title>
	<link rel="stylesheet" href="global.css">
	<link rel="stylesheet" href="guide.css">
	<script defer src="guide.js"></script>
</head>
<body>
</body>
</html>
`

configuration.styles = process.env.DEVELOP
	? [
		'global.css',
		'bundle.css'
	]
	: [
		'global.min.css',
		'bundle.min.css'
	]

const template = readFileSync(
	'./index-template.html',
	{ encoding: 'utf8' }
)

writeFileSync(
	'./public/index.html',
	render(template, configuration),
	{ encoding: 'utf8' }
)

writeFileSync(
	'./public/guide.html',
	guideHtml,
	{ encoding: 'utf8' }
)
