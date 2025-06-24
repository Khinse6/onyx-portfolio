<template>
	<div class="h-screen">
		<TresCanvas
			clear-color="#82DBC5"
			shadows
			alpha
		>
			<TresPerspectiveCamera :position="[0, 1, 1]" />

			<Suspense>
				<GLTFModel
					path="/models/brand-model.glb"
					draco
				/>
			</Suspense>
			<TresDirectionalLight
				:position="[0, 0, 0]"
				:intensity="1.5"
				cast-shadow
			/>
		</TresCanvas>
	</div>
</template>
