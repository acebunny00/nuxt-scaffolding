<template>
	<USelect :options="['United States', 'Canada', 'Mexico']" placeholder="Search...">
		<template #leading>
			<UIcon name="i-heroicons-flag" class="w-5 h-5" />
		</template>
	</USelect>
</template>
