// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    '@vueuse/nuxt'
  ],
  
  typescript: {
    shim: false
  },
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
  css: [
    '@/assets/scss/main.scss'
  ],



})
