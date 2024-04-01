<template>
	<div class="card flex justify-content-center">
		<Textarea v-model="value" rows="5" cols="30" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref("");
</script>
