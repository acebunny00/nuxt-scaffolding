<template>
	<div class="card flex justify-content-center">
		<InputText type="text" v-model="value" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref(null);
</script>
