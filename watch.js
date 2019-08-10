import CheapWatch from 'cheap-watch'
import { join } from 'path'
import { execSync } from 'child_process'

const runScript = script => {
	console.log(`executing npm run script: ${script}`)
	console.log(execSync(`npm run ${script}`).toString())
}

const ignoreOrRun = addOrRemove => ({ path, isNew }) => {
	if (path.startsWith('asset/')) {
		runScript('build:assets')
	}

	if (path === 'index-template.html') {
		return runScript('build:html')
	}

	if (path === 'configuration.js') {
		runScript('build:html')
		return runScript('build:manifest')
	}
}

const assetWatch = new CheapWatch({ dir: process.cwd() })
assetWatch.on('+', ignoreOrRun('+'))
assetWatch.on('-', ignoreOrRun('-'))
assetWatch.init()
