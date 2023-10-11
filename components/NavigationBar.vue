<template>
  <nav
    class="fixed w-full z-50 top-0 bg-white shadow-md p-2 transition-all navbar"
    :class="{
      'bg-white shadow-md': isVisible,
      '    bg-custom text-white transition-all ': !isVisible,
    }"
  >
    <div class="flex justify-center md:justify-between">
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
          <h1 class="text-lg md:text-3xl hidden md:block">The Daily Sun</h1>
        </div>
        <div class="flex justify-center items-center">
          <SearchBar :class="isVisible ? '' : 'not-visible'" />
        </div>
      </div>
      <div class="hidden md:flex items-center">
        <div class="text-center mr-6 flex">
          <NuxtLink to="/products" class="link" active-class="active-link">
            Products
          </NuxtLink>
          <NuxtLink to="/about" class="link" active-class="active-link">
            About
          </NuxtLink>

          <nuxt-link to="/Account" class="link" active-class="active-link">
            {{ user ? "Account" : "Login" }}
          </nuxt-link>

          <nuxt-link
            v-if="user"
            to="/cart"
            class="link relative"
            active-class="active-link"
          >
            Cart

            <span
              v-if="Quantity"
              class="absolute bottom-3 left-14 opacity-80 text-xs font-semibold inline-block py-1 px-2 rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1"
            >
              {{ Quantity }}
            </span>
          </nuxt-link>



  <div v-if="status === 'authenticated'">
    <img
      class="w-10 h-10 mx-4"
      src="https://next-auth.js.org/img/logo/logo-sm.png"
      alt="Authenticated"
      title="Authenticated"
    />
    <!-- Content to display when status is 'authenticated' -->
  </div>
  <div v-else>
    <!-- Content to display when status is not 'authenticated' -->
  </div>

        </div>
      </div>

      <!-- MOBILE VIEW MENU -->
      <div class="md:hidden flex justify-center">
        <div class="flex justify-between items-center w-56">
          <NuxtLink to="/products" class="link" active-class="active-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170628.png"
              alt="Products"
              class="icon"
            />
          </NuxtLink>
          <NuxtLink to="/about" class="link" active-class="active-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1/1176.png"
              alt="About"
              class="icon"
            />
          </NuxtLink>
          <nuxt-link to="/Account" class="link" active-class="active-link">
            <img
              v-if="user"
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt="Account"
              class="icon"
            />
            <img
              v-else
              src="https://cdn-icons-png.flaticon.com/512/1828/1828391.png"
              alt="Login"
              class="icon"
            />
          </nuxt-link>
          <nuxt-link
            v-if="user"
            to="/cart"
            class="link relative    "
            active-class="active-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
              alt="Cart"
              class="icon"
            />
            <span
              v-if="Quantity"
              class="absolute bottom-0 right-0 bg-orange-200 text-orange-600 font-semibold text-xs px-2 py-1 rounded-full"
              >{{ Quantity }}</span
            >
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useSession } from "next-auth/react";

const { status, data } = useAuth();
const isVisible = useState("true", () => true);
const cartStore = useCartStore();
const user = data?.value?.user;
const Quantity = useState("quantity", () => cartStore?.products?.length);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  setTimeout(() => {
    if (user?.value) {
      cartStore.getCart();
    }
  }, 1);
});

watch(
  () => cartStore.products,
  (newProducts) => {
    Quantity.value = newProducts?.length;
  }
);

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  const navbar = document.querySelector(".navbar");
  let prevScrollPosition = useState("position", () => 0);

  if (window.innerWidth >= 768 && window.scrollY > 50) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }
  if (window.innerWidth <= 768) {
    if (window.scrollY > prevScrollPosition.value) {
      navbar.style.transform = "translateY(-70px)";
      // console.log(window.scrollY, prevScrollPosition.value);
    } else {
      navbar.style.transform = "translateY(0)";
    }
  } else {
    navbar.style.transform = "translateY(0)";
  }
  prevScrollPosition.value = window.scrollY;
};
</script>

<style lang="scss">
.icon {
  height: 30px;
}
.text-logo {
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 10px !important;
  }
}
.link {
  transition: all 0.5s ease;
  font-size: 20px;
  margin: 0 6px;
  padding: 4px 10px;
  border-radius: 8px;
  font-weight: 400;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: relative;
  font-family: "Playfair Display", serif;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    padding: 4px 4px;
  }
}
.link:before {
  content: "";
  position: absolute;
  width: 0px;
  transform: translateX(0px);
  height: 3px;
  background-color: #f47d00;
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
  background-color: #f47d00;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
  }
}
.active-link {
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
  }
}
/*
.active-link-img img{
border: 2px solid #2bd882;
}*/
</style>
