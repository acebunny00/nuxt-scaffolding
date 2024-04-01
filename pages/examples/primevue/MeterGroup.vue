<template>
	<div class="card">
		<MeterGroup :value="value" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value = ref([{ label: "Space used", value: 15 }]);
</script>
