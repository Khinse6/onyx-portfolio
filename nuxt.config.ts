// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	ssr: false,
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/content',
		'@nuxt/ui',
	],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	vite: { plugins: [tailwindcss()] },
	future: { compatibilityVersion: 4 },
	compatibilityDate: '2025-03-01',
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.svg',
				},
			],
		},
	},
	nitro: {
		preset: 'static',
	},
	ui: {
		colorMode: false,
	},
	content: {
		preview: {
			api: 'https://api.nuxt.studio',
		},
	},
})
