<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		class="flex flex-col"
		:prose="false"
	/>
</template>

<script lang="ts" setup>
	const route = useRoute()
	const { data: page } = await useAsyncData(route.path, () => {
		return queryCollection('content').path(route.path).first()
	})
</script>
