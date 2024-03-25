// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
	],
	nitro: {
		experimental: {
			asyncContext: true,
			tasks: true,
			websocket: true,
			database: true,
		},
	},
	telemetry: false,
	typescript: { shim: false, strict: false },
});
