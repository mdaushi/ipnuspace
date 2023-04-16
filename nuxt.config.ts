// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-headlessui", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      title: "IPNU SPACE",
      link: [{ rel: "icon", type: "image/x-icon", href: "/ipnuspacelogo.svg" }],
      meta: [
        {
          name: "description",
          content:
            "ada banyak hal yang manarik tentang Pelajar Nahdlatul Ulama yang tersebar disemua sosial media. semua informasi organisasi, usaha, komunitas pengembangan bakat yang berkaitan tentang Pelajar Nahdlatul Ulama bisa terhimpun diaplikasi ini.",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
    },
  },
});
