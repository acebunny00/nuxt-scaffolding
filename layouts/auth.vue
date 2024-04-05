<script setup>
	useHead({
		title: "🔐 nuxt-auth-example",
	});
</script>

<template>
	<div class="min-h-screen h-full relative bg-gray-100 pb-20">
		<ExamplesAuthComponentsNavbar />
		<div class="fixed bottom-0 w-full">
			<ExamplesAuthComponentsAuthenticationStatus />
		</div>
		<ExamplesAuthComponentsWelcome />
		<NuxtPage />
	</div>
</template>
