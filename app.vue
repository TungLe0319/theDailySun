<template>
  <div>
    <NGlobalStyle />
    <NavigationBar />
    <NuxtPage />
    <FooterBar />
  </div>
</template>

<script>
import { cartService } from "./composables/services/CartService.js";

export default {
  setup () {
    // const { data } = useSession()
    // const route = useRoute()

    // onMounted(() => {
    //   setTimeout(() => {
    //     getAccount()
    //     getUserCart()
    //   }, 0)
    // })

    // async function getAccount () {
    //   const { $trpc } = useNuxtApp()
    //   const account = await $trpc.user.findFirst.query({
    //     where: {
    //       email: data.value.user.email,
    //       name: data.value.user.name
    //     }
    //   })

    //   AppState.account = account
    // }
    // async function getUserCart () {
    //   const { $trpc } = useNuxtApp()
    //   const cart = await $trpc.cart.findFirst.query({
    //     where: {
    //       userId: AppState.account.id
    //     }
    //   })
    //   AppState.userCart = cart
    // }
    return {}
  }
}
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
