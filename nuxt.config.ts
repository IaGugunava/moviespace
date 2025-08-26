// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss"],
  devtools: { enabled: true },
  modules: ['nuxt-swiper', "@nuxt/image", '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      NUXT_PUBLIC_WEBSITE_URL: process.env.NUXT_PUBLIC_WEBSITE_URL
    }
  },
  vite: {
    assetsInclude: ["**/*.html"],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
      @import "~/assets/styles/mixins/_palette.scss";
      @import "~/assets/styles/mixins/_layoutMixins.scss";
      `,
        },
      },
    },
  },
  pinia: {
    storesDirs: ["./stores/**"]
  },
})