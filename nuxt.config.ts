// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// https://primevue.org/theming/#themes
	css: ["primevue/resources/themes/lara-dark-indigo/theme.css"],
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
		"nuxt-primevue",
	],
	primevue: {
		components: {
			include: "*",
		},
		composables: {
			include: "*",
		},
		options: {
			ripple: true,
		},
	},
	telemetry: false,
	typescript: { shim: false, strict: false },
});
