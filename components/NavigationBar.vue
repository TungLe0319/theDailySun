<template>
  <nav class="fixed w-full z-10 top-0 bg-white shadow-md p-2   transition-all" :class="{'bg-white shadow-md': isVisible, '    bg-custom text-white transition-all ': !isVisible}">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-1/3">
        <NuxtLink to="/" class="text-lg font-medium  no-underline" active-class="active-link">
          <img src="../assets/Logo.png" alt="" width="80" class="shadow-xl rounded-xl">
        </NuxtLink>
      </div>
      <div class="w-1/3 hidden md:block">
        <div class="text-center">
          <NuxtLink to="/about" class="ml-4 text-base no-underline hover:text-gray-800" active-class="active-link">
            About Us
          </NuxtLink>
          <NuxtLink to="/prisma" class="ml-4 text-base no-underline hover:text-gray-800" active-class="active-link">
            prisma
          </NuxtLink>
          <NuxtLink to="/protected" class="ml-4 text-base no-underline hover:text-gray-800" active-class="active-link">
            protectd
          </NuxtLink>
        </div>
      </div>
      <div class="w-1/3">
        <div class="flex justify-end">
          <button class=" text-xl leading-none p-2 rounded-full hover:bg-gray-100 hover:text-gray-600" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import { NuxtLink } from '../.nuxt/components'

// import Login from './Login.vue'
export default {
  data () {
    return {
      isVisible: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 50) {
        this.isVisible = false
      } else {
        this.isVisible = true
      }
    }
  }
}
</script>
<style lang="scss">
.bg-custom{
  background-color:rgba(0, 0, 0, 0.584);
  backdrop-filter: blur(4px);
}
.active-link{
border-bottom: 3px solid #2bd882;
}
</style>

<!-- <template>
  <nav class="bg-gray-900">
    <div class="px-3 py-2 flex items-center justify-between">
      <NuxtLink :to="{ name: 'Home' }" class="flex items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" class="mr-3">
      </NuxtLink>
      <button
        class="text-white focus:outline-none"
        type="button"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5H20M4 12H20M4 19H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <transition name="navbar">
      <div v-if="showNavbar" class="bg-gray-900 p-5">
        <ul class="flex">
          <li class="mr-3">
            <NuxtLink :to="{ name: 'About' }" class="text-green-300 hover:text-white">
              About
            </NuxtLink>
          </li>
          <li>
            <button class="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
              Create group
            </button>
          </li>
        </ul>
        <button class="mt-3 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600" @click="changeUrl">
          button
        </button>
        <LoginBox />
      </div>
    </transition>
  </nav>
</template>

 -->

<!-- <script>
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const showNavbar = ref(false)
    const toggleNavbar = () => { showNavbar.value = !showNavbar.value }
    return {
      changeUrl () {
        route.name = 'Group'
      },
      toggleNavbar,
      showNavbar
    }
  }
}
</script> -->
<!-- <style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .NuxtLink-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

</style> -->
