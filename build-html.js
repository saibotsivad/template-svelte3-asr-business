import { readFileSync, writeFileSync } from 'fs'
import configuration from './configuration.js'
import { render } from 'mustache'

configuration.style = process.env.DEVELOP
	? 'bootstrap.css'
	: 'bootstrap.min.css'

const template = readFileSync(
	'./index-template.html',
	{ encoding: 'utf8' }
)

writeFileSync(
	'./public/index.html',
	render(template, configuration),
	{ encoding: 'utf8' }
)
