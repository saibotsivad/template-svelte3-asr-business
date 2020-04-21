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

## Quick Links

* [The SPA webapp](http://localhost:5000)
* [The style guide](http://localhost:5000/guide.html)
* [Dependency size visualization](http://localhost:5000/stats.html)

## Goals

Building a complete enterprise grade webapp is not necessarily *complicated* (most of the technology is known to someone somewhere), but it is not at all *easy*.

For example, just getting the favicon correct on all platforms is a [Herculean effort](https://realfavicongenerator.net/) that requires at least 2 different files, and over 30 different snippets in your HTML `<head>` block, depending on how thorough you want to be.

Because of this, it is absolutely impossible to cover every single use-case in a way that will satisfy every possible business need.

For example, if you were to try to cover every browser type and version, the only way to send a single static HTML file would be to include a huge pile of quirky HTML code, and a huge pile of vendor specific CSS, and so on. But if you did, your static HTML and your bundled static CSS/JS/etc. would be very large, if it were even possible at all.

Instead of trying to be a template for every business need, this project serves as a template and guide for a particular kind of business webapp, with decisions and compromises all along the way that will make many people upset.

Here are some guiding principles--if they do not sound right to you, this template is probably not a good fit for your needs!

* There is business value in getting the bundle size "reasonably small", but there is very little business value in getting it "as small as possible".
* It's better to let the download size be a little bigger, if it means the code is more readable and understandable.
* There is a *lot* of business value in keeping things simple.

## Contributing

Since this project is so contentious, it's almost certainly not worth your time making code changes and pull requests.

Instead, what would be really really useful to folks is if you [open an issue](https://github.com/saibotsivad/template-svelte3-asr-business/issues) and talk about whatever it is that you think could or should be done differently, and include code snippets and reference links.

Even though this template is very opinionated, open discussions about different compromises and technology decisions will help other people who are going through similar decision making.
