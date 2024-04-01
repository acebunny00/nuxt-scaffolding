<template>
	<div class="card flex justify-content-center">
		<InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref(null);
</script>
