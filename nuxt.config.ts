// import { RuntimeConfig } from "@trpc/server/dist/core/internals/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
// const origin = process.env.ORIGIN ? process.env.ORIGIN : 'http://localhost:3000'
export default defineNuxtConfig({
  // @ts-ignore
  auth: {
    origin: process.env.AUTH_ORIGIN
    // enableGlobalAppMiddleware: true
  },
  devServer: {
    port: 8000
  },
  // @ts-ignore
  modules: [
    '@sidebase/nuxt-auth',
    'nuxt-typed-router',
    '@nuxtjs/tailwindcss',
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
  // tailwindcss: {
  //   cssPath: "~/assets/scss/main.scss",
  //   configPath: "tailwind.config",
  //   exposeConfig: false,
  //   exposeLevel: 2,
  //   injectPosition: "first",
  //   viewer: true,
  //   // config: {
  //   //   content: [],
  //   //   theme: {
  //   //     container: {
  //   //       center: true,
  //   //       padding: "1rem",
  //   //     },
  //   //   },
  //   // },
  // },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/scss/main.scss']
})
