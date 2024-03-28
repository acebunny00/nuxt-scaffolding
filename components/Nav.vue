<template>
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
			<li><NuxtLink to="/examples/nuxtWelcome">nuxtWelcome</NuxtLink></li>
			<li><NuxtLink to="/examples/nuxtui">NuxtUI</NuxtLink></li>
		</ul>
	</nav>
	<div>[ {{ NODE_ENV }} ] Current route: {{ route.path }}</div>
	<hr />
	<nav>
		/nuxtUI/
		<ul>
			<li><NuxtLink to="/examples/ui/accordion">accordion</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/accordion2">accordion2</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/accordion3">accordion3</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/accordion4">accordion4</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/accordion5">accordion5</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/accordion6">accordion6</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/accordion7">accordion7</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/alert">alert</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/avatar">avatar</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/badge">badge</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/breadcrumb">breadcrumb</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/button">button</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/card">card</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/carousel">carousel</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/checkbox">checkbox</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/chip">chip</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/command-palette">command-palette</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/container">container</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/context-menu">context-menu</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/date-picker">date-picker</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/divider">divider</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/dropdown">dropdown</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/dropdown2">dropdown</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/dropdown3">dropdown</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/dropdown4">dropdown</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/dropdown5">dropdown</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/dropdown6">dropdown</NuxtLink></li>
			<li><NuxtLink to="/examples/ui/dropdown7">dropdown</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/form-group">form-group</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/form">form</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/horizontal-navigation">horizontal-navigation</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/icon">icon</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/input-menu">input-menu</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/input">input</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/kbd">kbd</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/link">link</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/meter">meter</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/modal">modal</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/notification">notification</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/pagination">pagination</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/popover">popover</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/progress">progress</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/radio-group">radio-group</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/range">range</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/select-menu">select-menu</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/select">select</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/skeleton">skeleton</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/slideover">slideover</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/table">table</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/tabs">tabs</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/textarea">textarea</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/toggle">toggle</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/tooltip">tooltip</NuxtLink></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><NuxtLink to="/examples/ui/vertical-navigation">vertical-navigation</NuxtLink></li>
		</ul>
	</nav>
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
