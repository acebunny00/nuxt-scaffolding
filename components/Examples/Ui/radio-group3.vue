<template>
	<URadioGroup
		legend="Legend"
		:options="[
			{ value: 'email', label: 'Email' },
			{ value: 'sms', label: 'Phone (SMS)' },
			{ value: 'push', label: 'Push notification' },
		]"
		model-value="sms" />
</template>
