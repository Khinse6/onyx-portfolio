<template>
	<div class="flex w-fit flex-wrap gap-2">
		<NuxtImg
			v-for="(img, i) in images"
			:key="i"
			:src="img"
			alt=""
			class="h-96 rounded-2xl object-cover shadow lg:max-w-1/2"
		/>
	</div>
</template>

<script setup>
	defineProps({
		images: {
			type: Array,
			required: true,
		},
	})
</script>
