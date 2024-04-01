<template>
	<div class="card p-fluid">
		<Chips v-model="value" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref();
</script>
