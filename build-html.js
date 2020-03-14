import { readFileSync, writeFileSync } from 'fs'
import configuration from './configuration.js'
import { render } from 'mustache'

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
