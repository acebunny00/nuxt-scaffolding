<template>
	<URadioGroup
		:options="[
			{ value: 'email', label: 'Email' },
			{ value: 'sms', label: 'Phone (SMS)' },
			{ value: 'push', label: 'Push notification' },
		]"
		model-value="sms">
		<template #legend>
			<span class="italic">Legend</span>
		</template>
	</URadioGroup>
</template>
