<template>
	<UTable
		loading
		:loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
		:progress="{ color: 'primary', animation: 'carousel' }"
		class="w-full"
		:columns="[
			{ key: 'id', label: 'ID' },
			{ key: 'name', label: 'Name' },
			{ key: 'title', label: 'Title' },
			{ key: 'email', label: 'Email' },
			{ key: 'role', label: 'Role' },
		]" />
</template>
