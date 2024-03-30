<script setup lang="ts">
	const isOpen = ref(false);

	defineShortcuts({
		escape: {
			usingInput: true,
			whenever: [isOpen],
			handler: () => {
				isOpen.value = false;
			},
		},
	});
</script>
