<template>
	<div class="card flex justify-content-center">
		<TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import { NodeService } from "./service/NodeService";

	const nodes = ref(null);
	const selectedValue = ref(null);

	onMounted(() => {
		NodeService.getTreeNodes().then((data) => (nodes.value = data));
	});
</script>
