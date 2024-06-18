export default defineNuxtConfig({
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  modules: ["@nuxt/test-utils/module", "@formkit/nuxt"],
  css: ["~/assets/css/main.scss"],
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ["@pinia/nuxt", "@nuxtjs/composition-api/module"],
  components: {
    dirs: [
      "~/components",
      "~/components/atoms",
      "~/components/molecules",
      "~/components/organisms",
      "~/components/templates",
    ],
  },
  publicRuntimeConfig: {
    DAPR_HTTP_ENDPOINT: process.env.DAPR_HTTP_ENDPOINT,
    DAPR_API_TOKEN: process.env.DAPR_API_TOKEN,
  },
});
