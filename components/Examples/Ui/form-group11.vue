<template>
	<UFormGroup label="Email">
		<template #description>
			Write only valid email address
			<UIcon name="i-heroicons-arrow-right-20-solid" />
		</template>
		<template #default>
			<UInput model-value="benjamincanac" placeholder="you@example.com" />
		</template>
	</UFormGroup>
</template>
