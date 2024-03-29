<script setup lang="ts">
	import { Ex } from "#components";

	const MyButton = resolveComponent("MyButton");
</script>

<template>
	<component :is="clickable ? MyButton : 'div'" />
	<component :is="Ex" />
</template>

<script setup>
	import { SomeComponent } from "#components";
</script>
