<template>
	<URadioGroup
		disabled
		:options="[
			{ value: 'email', label: 'Email' },
			{ value: 'sms', label: 'Phone (SMS)' },
			{ value: 'push', label: 'Push notification', disabled: true },
		]"
		model-value="sms" />
</template>
