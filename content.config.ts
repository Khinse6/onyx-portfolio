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
		design: defineCollection({
			type: 'page',
			source: '2.projects/3.design/**',
			schema: z.object({
				date: z.string(),
				img: z.string(),
			}),
		}),
		papers: defineCollection({
			type: 'page',
			source: '2.projects/4.paper-works/**',
			schema: z.object({
				date: z.string(),
				img: z.string(),
			}),
		}),
	},
})
