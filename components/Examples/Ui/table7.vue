<script setup lang="ts">
	// Ensure it uses `ref` instead of `reactive`.
	const sort = ref({
		column: "name",
		direction: "desc",
	});

	const columns = [
		{
			label: "Name",
			key: "name",
			sortable: true,
		},
	];

	const { data, pending } = await useLazyFetch(() => `/api/users?orderBy=${sort.value.column}&order=${sort.value.direction}`);
</script>

<template>
	<UTable v-model:sort="sort" :loading="pending" :columns="columns" :rows="data" sort-mode="manual" />
</template>
