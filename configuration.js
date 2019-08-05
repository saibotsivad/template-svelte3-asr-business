export default {
	// For local development, you may need to override this
	// for things like the Twitter card metadata.
	baseUrl: 'http://localhost:5000',
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
	// TODO: what is this used for?
	themeColor: '#ff3e00',
	// TODO: either always true, or enable/disable for local development?
	serviceWorker: true,
	// If set, this will add the Twitter card metadata.
	// twitterUsername: 'saibotsivad',
	// Used by the operating system as the webapp
	// icon placed on the desktop. Use a relative
	// URL, e.g. not prefixed with '/'.
	icons: [
		// TODO add for other sizes, e.g. 72, 96, 144, 168
		{
			src: 'asset/icon-android-chrome-192.png',
			sizes: '192x192',
			type: 'image/png'
		},
		{
			src: 'asset/icon-android-chrome-512.png',
			sizes: '512x512',
			type: 'image/png'
		}
	]
}
