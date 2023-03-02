// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      HOME_PAGE_ID: process.env.HOME_PAGE_ID,
    }
  },
})
