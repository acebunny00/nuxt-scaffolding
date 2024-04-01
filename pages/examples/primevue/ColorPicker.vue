<template>
	<div class="card flex justify-content-center">
		<ColorPicker v-model="color" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const color = ref();
</script>
