<template>
	<div class="card">
		<TreeTable :value="nodes">
			<Column field="name" header="Name" expander></Column>
			<Column field="size" header="Size"></Column>
			<Column field="type" header="Type"></Column>
		</TreeTable>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import { NodeService } from "@/service/NodeService";

	onMounted(() => {
		NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
	});

	const nodes = ref();
</script>
