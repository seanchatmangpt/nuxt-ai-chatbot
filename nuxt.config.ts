// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [    '@nuxt/test-utils/module'
	],
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		OPENAI_API_KEY: process.env.OPENAI_API_KEY
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
});
