<template>
	<div class="grid place-items-end gap-8 self-center md:grid-cols-3">
		<template
			v-for="(item, index) in items"
			:key="index"
		>
			<NuxtImg
				v-if="item.img"
				:src="item.img"
				class="custom-row-star rounded-3xl md:row-span-1"
				:class="[index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3']"
				:style="{ '--row-start': index + 1 }"
			/>
			<div
				class="custom-row-start md:col-span-2 md:row-span-1"
				:class="[index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1']"
				:style="{ '--row-start': index + 1 }"
			>
				<h4 class="mb-2">{{ item.title }} - {{ item.date }}</h4>
				<p>{{ item.description }}</p>
				<ULink
					:to="item.path"
					class="inline-block underline"
				>
					Saber mais
				</ULink>
			</div>
		</template>
	</div>
</template>

<script lang="ts" setup>
	const { data: items } = await useAsyncData('design-grid', () => {
		return queryCollection('design')
			.select('title', 'description', 'img', 'date', 'path')
			.order('date', 'DESC')
			.limit(2)
			.all()
	})
</script>

<style scoped>
	@media (min-width: 768px) {
		.custom-row-start {
			grid-row-start: var(--row-start);
		}
	}
</style>
