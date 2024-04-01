<template>
	<div class="card flex flex-wrap justify-content-center gap-3">
		<IconField iconPosition="left">
			<InputIcon class="pi pi-search"> </InputIcon>
			<InputText v-model="value1" placeholder="Search" />
		</IconField>

		<IconField>
			<InputIcon class="pi pi-spin pi-spinner"> </InputIcon>
			<InputText v-model="value2" />
		</IconField>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const value1 = ref(null);
	const value2 = ref(null);
</script>
