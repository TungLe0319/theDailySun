<template>
  <div>
    <NGlobalStyle />
    <NavigationBar />
    <NuxtPage />
    <FooterBar />
  </div>
</template>

<script >
import { accountsService } from './composables/services/AccountsService'
import { cartService } from "./composables/services/CartService.js"

const getAccount = () => {
  accountsService.getAccount()
}
getAccount()

// import { cartService } from "./composables/services/CartService.js";


export default {
  setup () {
    const { data } = useSession()
    const user = data.value.user
    const route = useRoute()

    onMounted(() => {
      setTimeout(() => {
        getAccount()
        getUserCart()
      }, 0)
    })

    async function getAccount () {
     console.log(user);


    }
    async function getUserCart () {
await cartService.getCartByUserId(user.id)
    }
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
