<template>
	<UContainer
		class="sticky top-0 mb-10 flex h-16 w-full items-center justify-between py-4"
	>
		<NuxtImg
			src="/logo.svg"
			class="h-full invert"
		/>
		<div class="hidden md:flex">
			<UNavigationMenu
				:items="headerLinks"
				class="w-full"
				color="neutral"
				variant="link"
				:ui="{ linkLabel: 'font-bebas text-2xl' }"
			/>
		</div>
		<div class="md:hidden">
			<UDropdownMenu
				:items="headerLinks"
				:content="{
					align: 'end',
					side: 'bottom',
				}"
				:ui="{ itemLabel: 'font-bebas text-2xl' }"
				size="xl"
			>
				<UButton
					icon="ic:round-menu"
					color="neutral"
					variant="ghost"
					size="xl"
				/>
			</UDropdownMenu>
		</div>
	</UContainer>
</template>

<script lang="ts" setup></script>
