<template>
	<div class="card">
		<Toast />
		<div style="height: 1000px">Scroll down to lazy load an image.</div>

		<DeferredContent @load="onImageLoad">
			<img src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg" alt="Nature" />
		</DeferredContent>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const onImageLoad = () => {
		toast.add({ severity: "success", summary: "Image Initialized", detail: "Scroll down to load the datatable", life: 2000 });
	};
</script>
