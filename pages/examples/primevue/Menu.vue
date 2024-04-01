<template>
	<div class="card flex justify-content-center">
		<Menu :model="items" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const items = ref([
		{ label: "New", icon: "pi pi-plus" },
		{ label: "Search", icon: "pi pi-search" },
	]);
</script>
