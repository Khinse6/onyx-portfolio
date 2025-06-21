<template>
	<TresCanvas clear-color="#000">
		<TresPerspectiveCamera :position="[0, 0, 5]" />
		<OrbitControls />

		<!-- Lighting -->
		<TresAmbientLight :intensity="0.5" />
		<TresDirectionalLight
			:position="[2, 2, 2]"
			:intensity="1"
		/>

		<!-- 3D Model -->
		<Suspense>
			<primitive
				:object="model"
				:rotation="rotation"
			/>
		</Suspense>
	</TresCanvas>
</template>

<script setup lang="ts">
	import { Vector2 } from 'three'

	const { scene: model } = await useGLTF('/models/brand-model.gltf')

	const rotation = reactive([0, 0, 0])

	const mouse = new Vector2()

	const handleMouseMove = (event: MouseEvent) => {
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

		rotation[1] = mouse.x * 1.5 // Rotate Y
		rotation[0] = mouse.y * 1.5 // Rotate X
	}

	onMounted(() => {
		window.addEventListener('mousemove', handleMouseMove)
	})
</script>
