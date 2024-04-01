<template>
	<div class="card flex justify-content-center">
		<Knob v-model="value" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref(0);
</script>
