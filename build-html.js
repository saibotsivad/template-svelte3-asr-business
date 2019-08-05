import { readFileSync, writeFileSync } from 'fs'
import configuration from './configuration.js'
import { render } from 'mustache'

const template = readFileSync(
	'./index-template.html',
	{ encoding: 'utf8' }
)

writeFileSync(
	'./public/index.html',
	render(template, configuration),
	{ encoding: 'utf8' }
)
