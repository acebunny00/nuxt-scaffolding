// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
		"@nuxt/ui",
	],
	telemetry: false,
	typescript: { shim: false, strict: false },
});
