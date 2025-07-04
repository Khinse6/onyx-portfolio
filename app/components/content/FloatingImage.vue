<template>
	<div
		class="flex w-full flex-col gap-8 md:flex-row"
		:class="floatRight ? 'md:flex-row-reverse' : 'md:flex-row'"
	>
		<div class="h-fit w-full overflow-clip rounded-3xl md:w-1/2">
			<slot
				name="image"
				mdc-unwrap="p"
			/>
		</div>
		<div class="flex w-full flex-col gap-4 md:w-1/2">
			<slot name="description" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	defineProps<{
		floatRight?: boolean
	}>()
</script>
