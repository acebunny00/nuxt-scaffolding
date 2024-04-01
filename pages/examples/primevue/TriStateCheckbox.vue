<template>
	<div class="card flex flex-column align-items-center gap-3">
		<TriStateCheckbox v-model="value" />
		<label for="checkbox">{{ value == null ? "null" : value }}</label>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref(null);
</script>
