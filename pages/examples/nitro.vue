<template>
	<div></div>
	{{ nitro }}
</template>

<script setup>
	const nitro = $fetch("/api/nitro");
</script>
