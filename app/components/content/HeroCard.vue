<template>
	<div
		class="grid max-w-6xl auto-cols-auto gap-x-4 gap-y-4 self-center text-2xl"
	>
		<div
			v-if="$slots.image"
			class="row-span-3 flex h-fit"
		>
			<slot
				name="image"
				mdc-unwrap="p"
			/>
		</div>
		<div class="col-start-2 row-start-1">
			<h2
				v-if="$slots.title"
				class="text-3xl"
			>
				<slot
					name="title"
					mdc-unwrap="p"
				/>
			</h2>
			<slot name="description" />
		</div>
		<div>
			<h2 class="text-3xl">Educação</h2>
			<div class="flex justify-between">
				<div>
					<slot name="university" />
				</div>
				<div class="text-end">
					<slot name="degree" />
				</div>
			</div>
		</div>
		<div class="flex justify-between">
			<div>
				<h2 class="text-3xl">Idiomas</h2>
				<slot name="languages" />
			</div>
			<div class="flex flex-col justify-evenly text-center">
				<slot name="contact" />
				<slot name="cv" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
