// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	auth: {
		isEnabled: true,
		baseURL: process.env.AUTH_ORIGIN,
		provider: {
			type: "authjs",
		},
		globalAppMiddleware: {
			isEnabled: true,
		},
	},
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
		"@sidebase/nuxt-auth",
	],
	telemetry: false,
	typescript: { shim: false, strict: false },
});
