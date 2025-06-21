<template>
	<div class="w-1/2 space-y-12 self-center">
		<div
			v-for="(brand, index) in branding"
			:key="index"
			class="grid items-center gap-8 md:grid-cols-2"
		>
			<NuxtImg
				v-if="brand.img"
				:src="brand.img"
				class="h-fit w-full rounded-3xl object-contain"
				:class="index % 2 ? 'md:order-1' : 'md:order-2'"
			/>

			<div :class="index % 2 ? 'md:order-2' : 'md:order-1'">
				<h4 class="mb-2 text-2xl">{{ brand.title }} - {{ brand.date }}</h4>
				<p>
					{{ brand.description }}
					<ULink
						:to="brand.path"
						class="ml-1 inline-block underline"
					>
						Saber mais.
					</ULink>
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { data: branding } = await useAsyncData('branding-grid', () => {
		return queryCollection('branding')
			.select('title', 'description', 'img', 'date', 'path')
			.order('date', 'DESC')
			.limit(3)
			.all()
	})
</script>
