<template>
	<div class="card flex justify-content-center">
		<Slider v-model="value" class="w-14rem" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref(null);
</script>
