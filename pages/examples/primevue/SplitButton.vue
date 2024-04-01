<template>
	<div class="card flex justify-content-center">
		<Toast />
		<SplitButton label="Save" @click="save" :model="items" />
	</div>
</template>

<script setup>
	import { useToast } from "primevue/usetoast";
	const toast = useToast();

	const items = [
		{
			label: "Update",
			command: () => {
				this.$toast.add({ severity: "success", summary: "Updated", detail: "Data Updated", life: 3000 });
			},
		},
		{
			label: "Delete",
			command: () => {
				this.$toast.add({ severity: "warn", summary: "Delete", detail: "Data Deleted", life: 3000 });
			},
		},
		{
			label: "Vue Website",
			command: () => {
				window.location.href = "https://vuejs.org/";
			},
		},
		{ label: "Upload", to: "/fileupload" },
	];

	const save = () => {
		toast.add({ severity: "success", summary: "Success", detail: "Data Saved", life: 3000 });
	};
</script>
