<template>
	<UMeterGroup :min="0" :max="128" size="md" indicator icon="i-heroicons-minus">
		<UMeter :value="24" color="gray" label="System" />
		<UMeter :value="8" color="red" label="Apps" />
		<UMeter :value="12" color="yellow" label="Documents" />
		<UMeter :value="42" color="green" label="Multimedia" />
		<!-- Total: 86 -->
	</UMeterGroup>
</template>
