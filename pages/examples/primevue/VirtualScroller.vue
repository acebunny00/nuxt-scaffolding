<template>
	<div class="card flex justify-content-center">
		<VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
			<template v-slot:item="{ item, options }">
				<div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
			</template>
		</VirtualScroller>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const items = ref(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));
</script>
