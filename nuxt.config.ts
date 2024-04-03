// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['nuxt-icon', '@pinia/nuxt'],
	css: ['vuetify/lib/styles/main.sass'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
	runtimeConfig: {
		public: {
			backend: process.env.BACKEND,
			backendUrl:process.env.BACKEND_UPLOADS
		},
	},
	ssr: false,
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					href: '/icon.png',
				},
				{
					rel: 'stylesheet',
					href: '/helpers.css',
				},
				{
					rel: 'stylesheet',
					href: '/bootstrap.min.css',
				},
				{
					rel: 'stylesheet',
					href: '/style.css',
				},
			],
		},
	},
});
