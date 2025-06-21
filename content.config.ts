import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**',
		}),
		branding: defineCollection({
			type: 'page',
			source: '2.projects/1.branding/**',
			schema: z.object({
				date: z.string(),
				img: z.string(),
			}),
		}),
	},
})
