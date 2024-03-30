<template>
	<UNotification
		:actions="[
			{ variant: 'solid', color: 'primary', label: 'Action 1' },
			{ variant: 'outline', color: 'primary', label: 'Action 2' },
		]"
		:id="9"
		title="Notification"
		description="This is a notification."
		:timeout="0" />
</template>
