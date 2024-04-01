<template>
	<div class="card flex justify-content-center">
		<InputSwitch v-model="checked" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const checked = ref(false);
</script>
