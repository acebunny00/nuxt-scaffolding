<template>
	<UTable
		:empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"
		class="w-full"
		:columns="[
			{ key: 'id', label: 'ID' },
			{ key: 'name', label: 'Name' },
			{ key: 'title', label: 'Title' },
			{ key: 'email', label: 'Email' },
			{ key: 'role', label: 'Role' },
		]" />
</template>
