<template>
  <nav
    class="fixed w-full z-50 top-0 bg-white shadow-md p-2 transition-all"
    :class="{
      'bg-white shadow-md': isVisible,
      '    bg-custom text-white transition-all ': !isVisible,
    }"
  >
    <div class="flex justify-between">
      <div class="ml-3 flex gap-x-5">
        <NuxtLink to="/" class="">
          <img
            src="../assets/Logo.png"
            alt=""
            width="50"
            class="shadow-xl rounded-xl"
          />
        </NuxtLink>
        <div class="items-center justify-center flex">
          <h1 class="text-xl">The Daily Sun</h1>
        </div>
      </div>
      <div class="hidden md:flex items-center">
        <div class="text-center mr-6">
          <NuxtLink to="/products" class="link" active-class="active-link">
            Products
          </NuxtLink>
          <NuxtLink to="/about" class="link" active-class="active-link">
            About
          </NuxtLink>
          <!-- <NuxtLink to="/prisma" class="link" active-class="active-link">
            Prisma
          </NuxtLink> -->
          <!-- <NuxtLink to="/protected" class="link" active-class="active-link">
            protected
          </NuxtLink> -->

          <nuxt-link

          to="/Account" class="link" active-class="active-link">
           {{ user? 'Account' : 'Sign In' }}
          </nuxt-link>

          <nuxt-link
            v-if="user"
            to="/cart"
            class="link relative"
            active-class="active-link"
          >
            Cart

            <span
              v-if="cartQuantity"
              class="absolute bottom-3 left-14 opacity-80 text-xs font-semibold inline-block py-1 px-2 rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1"
            >
              {{ cartQuantity }}
            </span>
            <!-- <n-spin v-else size="small" /> -->
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const products = useState("products", () => []);
const isVisible = useState("true", () => true);
const cartStore = useCartStore();
const { data: user } = useSession();
const cartQuantity = computed(() => cartStore.products.length);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  setTimeout(() => {
    // getUserData();
    if (user.value) {
      cartStore.getCart();
    }
  }, 1);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  if (window.scrollY > 50) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }
};
</script>

<!-- <script>
// import { NuxtLink } from '../.nuxt/components'

// import Login from './Login.vue'
export default {
  data () {
    return {
      isVisible: true,

    }
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
</script> -->
<style lang="scss">
.link {
  transition: all 0.5s ease;
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
  position: absolute;
  width: 0px;
  transform: translateX(0px);
  height: 3px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease;
}
.link:hover:before {
  transition: all 0.5s ease;
  width: 100%;
}
.bg-custom {
  background-color: rgba(0, 0, 0, 0.584);
  backdrop-filter: blur(4px);
}
.active-link:before {
  content: "";
  position: absolute;
  width: 100%;

  height: 3px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease;
}
/*
.active-link-img img{
border: 2px solid #2bd882;
}*/
</style>
