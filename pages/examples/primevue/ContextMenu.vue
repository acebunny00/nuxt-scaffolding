<template>
	<div class="card">
		<img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature2.jpg" @contextmenu="onImageRightClick" class="w-full md:w-30rem border-round shadow-4" aria-haspopup="true" />
		<ContextMenu ref="menu" :model="items" />
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const menu = ref();
	const items = ref([
		{ label: "Copy", icon: "pi pi-copy" },
		{ label: "Rename", icon: "pi pi-file-edit" },
	]);

	const onImageRightClick = (event) => {
		menu.value.show(event);
	};
</script>
