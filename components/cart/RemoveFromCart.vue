<template>
  <div class="">
    <button
      @click="RemoveFromCart(product)"
      class="checkOut font-1 text-xl font-bold  hover:text-red-400 transition-colors"
    >
    <img src="https://cdn-icons-png.flaticon.com/512/458/458594.png" alt="remove Icon" width="30" class="icon">
    </button>
  </div>
</template>

<script>
import { cartService } from "~~/composables/services/CartService.js";

export default {
  props: {
    product: { typeof: Object },
  },
  setup() {
    return {
      async RemoveFromCart(product) {
        try {
 let id = product.id
          await cartService.removeFromCart(id)

          pop.toast('success','success','top-start',2000)

        } catch (error) {
          logger.log(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.icon{
  transition: transform 0.5s ease;

}
.icon:hover{
  transform: rotate(180deg);
  transition: transform 0.5s ease;
}
</style>
