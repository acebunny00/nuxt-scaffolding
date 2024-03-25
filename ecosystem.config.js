module.exports = {
	apps: [
		{
			name: "nuxt-app with pm2",
			instances: 2,
			script: "./.output/server/index.mjs",
			watch: true,
			ignore_watch: ["node_modules"],
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
