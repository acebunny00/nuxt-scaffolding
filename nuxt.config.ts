// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	components: {
		global: true,
		dirs: ["~/components"],
	},
	devtools: { enabled: true, timeline: { enabled: true } },
	modules: [
		//,
		"@nuxt/ui",
	],
	router: {
		// ...

		extendRoutes(routes: any[]) {
			routes.forEach((route) => {
				if (route.component && route.component.startsWith("@/components/")) {
					route.component = `~/pages${route.component.replace("@/components/", "")}.vue`;
				}
			});
		},
	},
	telemetry: false,
	typescript: { shim: false, strict: false },
});
