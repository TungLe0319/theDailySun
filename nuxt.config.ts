// https://nuxt.com/docs/api/configuration/nuxt-config
const origin = process.env.AUTH_ORIGIN ? process.env.AUTH_ORIGIN : 'http://localhost:3000'
export default defineNuxtConfig({
  // @ts-ignore
  auth: {
    origin
  },

  // @ts-ignore
  modules: [
    '@sidebase/nuxt-auth',
    'nuxt-typed-router',
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    'nuxt-swiper',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore', 'acceptHMRUpdate'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ]
  ],
  imports: {
    dirs: ['stores']
  },
  build: {
    transpile: ['trpc-nuxt']
  },
  typescript: {
    shim: false
  },
  // @ts-ignore
  tailwindcss: {
    config: {
      content: [],
      theme: {
        container: {
          center: true,
          padding: '1rem'
        }
      }
    }
  },

  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  css: ['@/assets/scss/main.scss']
})
