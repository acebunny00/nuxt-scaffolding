<template>
	<ColorScheme><USelect class="right" v-model="$colorMode.preference" :options="['system', 'light', 'dark', 'sepia']" /></ColorScheme>
	<nav>
		<ul>
			<li><NuxtLink to="/">index</NuxtLink></li>
			<li><NuxtLink to="/product">product</NuxtLink></li>
			<li><NuxtLink to="/product/1">product/1</NuxtLink></li>
			<li><NuxtLink to="/product/2">product/2</NuxtLink></li>
			<li><NuxtLink to="/product/3">product/3</NuxtLink></li>
			<li><NuxtLink to="/login">login</NuxtLink></li>
			<li><NuxtLink to="/protected">protected</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		/examples/
		<ul>
			<li><NuxtLink to="/examples/uploadFile1">uploadFile1</NuxtLink></li>
			<li><NuxtLink to="/examples/uploadFile2">uploadFile2</NuxtLink></li>
			<li><NuxtLink to="/examples/uploadFile3">uploadFile3</NuxtLink></li>
			<li><NuxtLink to="/examples/uploadFile4Util">uploadFile4Util</NuxtLink></li>
			<li><NuxtLink to="/examples/nuxtWelcome">nuxtWelcome</NuxtLink></li>
			<li><NuxtLink to="/examples/vueuse">VueUse</NuxtLink></li>
			<li><NuxtLink to="/examples/nuxtui">NuxtUI</NuxtLink></li>
			<li><NuxtLink to="/examples/prisma">Prisma</NuxtLink></li>
			<li><NuxtLink to="/examples/auth">Auth</NuxtLink></li>
		</ul>
	</nav>
	<div>[ {{ NODE_ENV }} ] Current route: {{ route.path }}</div>
	<hr />
</template>

<script setup>
	const route = useRoute();
	const NODE_ENV = process.env.NODE_ENV;
</script>

<style scoped>
	.right {
		float: right;
	}
	nav {
		box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
		display: flow-root;
	}
	ul {
		list-style: none;
	}
	li {
		float: left;
		margin-right: 20px;
	}
</style>
