export default {
	// The default title used when the page is
	// loaded. Other routes might override this.
	title: 'My Webapp',
	// Used by webapps, when the user creates a
	// desktop shortcut.
	shortName: 'My Webapp',
	// Shown in the main HTML and other places.
	description: 'My very cool app using Svelte 3 and abstract-state-router.',
	// When launched from a desktop shortcut, this
	// color is used before assets are loaded.
	backgroundColor: '#fff',
	// Used by the operating system as the webapp
	// icon placed on the desktop. Use a relative
	// URL, e.g. not prefixed with '/'.
	icons: [
		{
			src: 'images/touch/homescreen48.png',
			sizes: '48x48',
			type: 'image/png'
		}
		// and so on for other sizes, e.g. 72, 96, 144, 168, 192
	]
}
