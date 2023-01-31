<template>
  <div class="">
    <button
      @click="addToCart(productId)"
      class="checkOut font-1 text-xl font-bold p-2 bg-green-300"
    >
      AddToCart
    </button>
  </div>
</template>

<script>
import {cartService} from '../../composables/services/CartService.js'
export default {
  props: {
    productId: { typeof: String },
  },
  setup() {

    return {
      async addToCart(productId) {

  try {
    await cartService.addToCart(productId)
 pop.success(`Added ${AppState.activeProduct.title} to your cart`);

  } catch (error) {
    logger.log(error)
  }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
