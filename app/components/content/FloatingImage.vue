<template>
	<div
		class="flex flex-col gap-8"
		:class="floatRight ? 'md:flex-row-reverse' : 'md:flex-row'"
	>
		<div class="overflow-clip rounded-3xl">
			<slot
				name="image"
				mdc-unwrap="p"
			/>
		</div>
		<div class="flex flex-col gap-4">
			<slot name="description" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	defineProps<{
		floatRight?: boolean
	}>()
</script>
