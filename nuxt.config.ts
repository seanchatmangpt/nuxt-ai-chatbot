// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/test-utils/module", "@formkit/nuxt"],
  plugins: ["~/plugins/pinia.js"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ["@pinia/nuxt"],
  components: {
    dirs: [
      "~/components",
      "~/components/atoms",
      "~/components/molecules",
      "~/components/organisms",
      "~/components/templates",
    ],
  },
});
