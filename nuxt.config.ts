// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss"],
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
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
})
