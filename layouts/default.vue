<template>
	<div>
		<div>[ {{ NODE_ENV }} ] Current route: {{ route.path }}</div>
		<hr />
		<slot />
	</div>
</template>

<script setup>
	const route = useRoute();
	const NODE_ENV = process.env.NODE_ENV;
</script>
