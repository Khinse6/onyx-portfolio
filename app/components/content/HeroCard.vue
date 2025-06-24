<template>
	<div
		class="grid auto-cols-auto gap-x-4 gap-y-4 self-center pb-8 text-2xl md:w-4/5"
	>
		<div
			v-if="$slots.image"
			class="flex h-fit md:row-span-3"
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
		<div class="col-span-2 md:col-span-1">
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
		<div class="col-span-2 flex justify-between md:col-span-1">
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
