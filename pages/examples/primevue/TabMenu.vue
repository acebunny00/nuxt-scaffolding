<template>
	<div class="card">
		<TabMenu :model="items" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const items = ref([
		{ label: "Dashboard", icon: "pi pi-home" },
		{ label: "Transactions", icon: "pi pi-chart-line" },
		{ label: "Products", icon: "pi pi-list" },
		{ label: "Messages", icon: "pi pi-inbox" },
	]);
</script>
