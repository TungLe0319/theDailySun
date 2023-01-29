<template>
  <nav class="fixed w-full z-10 top-0 bg-white shadow-md p-2   transition-all" :class="{'bg-white shadow-md': isVisible, '    bg-custom text-white transition-all ': !isVisible}">
    <div class="  flex  justify-between">
      <div class=" ml-3">
        <NuxtLink to="/" class="" active-class="active-link-img">
          <img src="../assets/Logo.png" alt="" width="50" class="shadow-xl rounded-xl">
        </NuxtLink>
      </div>
      <div class=" hidden  md:flex  items-center ">
        <div class=" text-center">
          <NuxtLink to="/about" class="link" active-class="active-link">
            About
          </NuxtLink>
          <NuxtLink to="/prisma" class="link" active-class="active-link">
            Prisma
          </NuxtLink>
          <NuxtLink to="/protected" class="link" active-class="active-link">
            protected
          </NuxtLink>

          <nuxt-link to="/Account" class="link" active-class="active-link">
            Account
          </nuxt-link>
          <nuxt-link to="/cart" class="link" active-class="active-link">
            Cart

          </nuxt-link>
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
.link{
   transition:  all 0.5s ease;
  font-size: 20px;
  margin: 0 6px;
  padding: 4px 10px;
  border-radius: 8px;
  font-weight: 600;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: relative;
}
.link:before {
  content: "";
  position:absolute;
  width: 0px;
 transform: translateX(0px);
  height: 3px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
   transition:  all 0.5s ease;
}
.link:hover:before{

  transition:  all 0.5s ease;
width:  100%;

}
.bg-custom{
  background-color:rgba(0, 0, 0, 0.584);
  backdrop-filter: blur(4px);
}
.active-link:before {
  content: "";
  position:absolute;
  width: 100%;

  height: 3px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
   transition:  all 0.5s ease;
}
/*
.active-link-img img{
border: 2px solid #2bd882;
}*/
</style>
