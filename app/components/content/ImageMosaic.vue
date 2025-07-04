<template>
	<div class="justify flex w-full flex-wrap justify-center gap-2">
		<NuxtImg
			v-for="(img, i) in images"
			:key="i"
			:src="img"
			alt=""
			class="h-48 rounded-2xl object-cover shadow md:h-[40rem] lg:max-w-1/2"
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
