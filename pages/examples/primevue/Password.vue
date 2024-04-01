<template>
	<div class="card flex justify-content-center">
		<Password v-model="value" :feedback="false" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref(null);
</script>
