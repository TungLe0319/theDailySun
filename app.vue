<template>
  <div>
    <!-- <NGlobalStyle /> -->
    <NavigationBar />
    <NuxtPage />
    <FooterBar />
  </div>
</template>

<script setup>
// import { accountsService } from './composables/services/AccountsService'
// import { cartService } from './composables/services/CartService'

// const ready = onNuxtReady(async () => {
//   await accountsService.getAccount()
//   await cartService.getCartByUserId()
// })
// ready()

// import { cartService } from './composables/services/CartService.js'

// import { cartService } from "./composables/services/CartService.js";

// export default {
//   setup () {
//     const { data } = useSession()
//     const user = data.value

//     onMounted(() => {
//       setTimeout(() => {
//         getUserCart()
//       }, 0)
//     })

//     async function getUserCart () {
//       await cartService.getCartByUserId(user.id)
//     }
//     return {}
//   }
// }
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
