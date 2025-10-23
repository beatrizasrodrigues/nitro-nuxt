// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // srcDir: 'app/',
  // serverDir: 'server',

  // runtimeConfig: {
  //   public: {
  //     apiBase: 'http://localhost:3000', 
  //   },
  // },

  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxt/ui'
  ],

  css: ['vuetify/styles', '~/assets/css/main.css'],
  build: {
    transpile: ['vuetify']
  }
})