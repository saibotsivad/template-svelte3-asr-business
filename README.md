# Template: Svelte with abstract-state-router

This is a project template for projects that use [Svelte](https://svelte.dev) and [asr](https://github.com/TehShrike/abstract-state-router).

The primary focus is on business type webapps that do not need to prioritize on first-load optimization.

Of course load time is still important, so the build step has some size limit tests (so you don't accidentally add a large dependency) and creates some bundle size visualizations to help keep the size down.

Start a project:

```bash
npx degit saibotsivad/template-svelte3-asr-business my-app
cd my-app
npm install
npm run dev
```

This will build all assets, start a server at [localhost:5000](http://localhost:5000), and rebuild on any file changes.
