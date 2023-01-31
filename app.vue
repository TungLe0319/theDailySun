<template>
  <div>
    <NGlobalStyle />
    <NavigationBar />
    <NuxtPage />
    <FooterBar />
  </div>
</template>



mplate>


<script>
import { cartService } from "./composables/services/CartService.js";

export default {


  setup(){
const { data } = useSession()
  const route = useRoute();

    onMounted(() => {
      setTimeout(() => {

        getAccount()
        getCartByUserId()
      }, 0);
    });

 async function getAccount(){
   
AppState.account = account

   }
 async function getCartByUserId(){
  try {
    await cartService.getCartByUserId()
  } catch (error) {
    logger.log(error)
  }
   }
    return {

    }
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
