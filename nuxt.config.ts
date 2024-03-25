// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
		"@pinia/nuxt",
	],
	telemetry: false,
	typescript: { shim: false, strict: false },
});
