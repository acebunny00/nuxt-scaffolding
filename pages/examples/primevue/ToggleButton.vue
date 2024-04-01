<template>
	<div class="card flex justify-content-center">
		<ToggleButton v-model="checked" class="w-6rem" onLabel="On" offLabel="Off" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const checked = ref(false);
</script>
