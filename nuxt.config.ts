// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "nuxt-lodash",
  ],

  css: ["@/assets/style/main.css"],
  pinia: {},

  imports: {
    dirs: ["./stores"],
  },

  googleFonts: {
    families: {
      Poppins: [200, 300, 400, 500, 900],
    },
  },

  compatibilityDate: "2024-07-22",
 });