<script setup lang="ts">
	const columns = [
		{
			key: "name",
			label: "Name",
		},
		{
			key: "title",
			label: "Title",
		},
		{
			key: "email",
			label: "Email",
		},
		{
			key: "role",
			label: "Role",
		},
		{
			key: "actions",
		},
	];

	const { pending, data: people } = await useLazyAsyncData("people", () => $fetch("/api/people"));
</script>

<template>
	<UTable :rows="people" :columns="columns" :loading="pending" />
</template>
