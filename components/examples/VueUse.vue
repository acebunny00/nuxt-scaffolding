<template>
	<div>
		<UseMouse v-slot="{ x, y }">x: {{ x }} y: {{ y }} </UseMouse>
	</div>
	<div>useLocalStorage: {{ store }}</div>
	<div>
		<UseDark v-slot="{ isDark, toggleDark }">
			<button @click="toggleDark()">UseDark: {{ isDark }}</button>
		</UseDark>
		<select v-model="colorMode">
			<option value="light">Light Mode</option>
			<option value="dark">Dark Mode</option>
			<option value="sepia">Sepia Mode</option>
			<option value="cafe">Cafe Mode</option>
			<option value="dim">Dim Mode</option>
			<option value="retro">Retro Mode</option>
		</select>
	</div>
	<hr />
</template>

<script setup>
	import { UseMouse, UseDark } from "@vueuse/components";
	const colorMode = useColorMode({
		modes: {
			sepia: "sepia",
			dim: "dim",
			cafe: "cafe",
		},
		attribute: "theme",
	});

	// persist state in localStorage
	const store = useLocalStorage("my-storage", {
		name: "Apple",
		color: "red",
	});

	// // tracks mouse position
	// const { x, y } = useMouse();

	// // is user prefers dark theme
	// const isDark = usePreferredDark();
</script>

<style>
	[theme="dark"] {
		background: #091a28;
		color: #ebf4f1;
	}
	[theme="sepia"] {
		background: #f1e7d0;
		color: #433422;
	}
	[theme="cafe"] {
		background: #c0acac;
		color: black;
	}
	[theme="dim"] {
		background: gray;
		color: white;
	}
	[theme="retro"] {
		background: #3a5c43;
		color: white;
	}
</style>
