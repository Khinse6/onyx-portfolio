<template>
	<UCarousel
		v-slot="{ item }"
		:items="items"
		:ui="{ item: 'md:basis-1/2 lg:basis-1/3' }"
		dots
	>
		<ULink
			class="flex h-full flex-col"
			:to="item.path"
		>
			<NuxtImg
				:src="item.img"
				class="h-96 w-full rounded-lg object-cover"
			/>
			<p class="mt-2 text-center">{{ item.title }}</p>
		</ULink>
	</UCarousel>
</template>

<script setup lang="ts">
	const { data: items } = await useAsyncData('branding-carousel', () => {
		return queryCollection('branding')
			.select('title', 'img', 'date', 'path')
			.order('date', 'DESC')
			.all()
	})
</script>
