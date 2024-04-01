<template>
	<div class="card flex flex-column align-items-center gap-3">
		<Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle .p-disabled" />
		<InputText />
	</div>
</template>

<script setup></script>
