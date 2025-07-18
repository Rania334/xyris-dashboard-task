// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
   runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL,
      API_URL2: process.env.NUXT_API_URL2,
      API_KEY: process.env.NUXT_API_KEY,
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons','@nuxtjs/color-mode'],
   colorMode: {
    classSuffix: ''
  },
  css: ['../assets/css/tailwind.css'],
  components: [
    { path: '../components/ui', pathPrefix: false },
    { path: '../components/layout', pathPrefix: false },
    { path: '../components/settings', pathPrefix: false },
    { path: '../Pages', pathPrefix: false },
    // { path: '../components/layout/Sidebar', pathPrefix: false },
    // { path: '../components/layout/Header', pathPrefix: false },
  ]


})