<template>
	<div class="card flex justify-content-center">
		<SelectButton v-model="value" :options="options" aria-labelledby="basic" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref("One-Way");
	const options = ref(["One-Way", "Return"]);
</script>
