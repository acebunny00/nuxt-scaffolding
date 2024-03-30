<template>
	<div class="p-4 flex flex-col justify-center h-screen overflow-auto">
		<component :is="name" />
	</div>
</template>

<script setup lang="ts">
	const route = useRoute();

	const name = route.params.slug[0];
	console.log(name);

	import fs from "fs";

	const files = fs.readdirSync("components", {
		withFileTypes: true,
	});

	const vueFiles = files.filter((file) => file.isFile() && file.name.endsWith(".vue"));

	console.log(vueFiles);
</script>
