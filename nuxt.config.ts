// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
	],
	runtimeConfig: {
		baseUrl: "http://localhost:3000",
	},
	telemetry: false,
	typescript: { shim: false, strict: false },
	vite: {
		optimizeDeps: {
			include: ["@editorjs/editorjs"],
		},
	},
});
