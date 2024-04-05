// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	auth: {
		isEnabled: true,
		baseURL: process.env.AUTH_ORIGIN,
		provider: {
			type: "authjs",
		},
		// globalAppMiddleware: {
		// 	isEnabled: true,
		// },
	},
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
		"@nuxt/ui",
		"@sidebase/nuxt-auth",
		"@vueuse/nuxt",
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
