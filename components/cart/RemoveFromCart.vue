<template>
  <div class="">
    <button
      @click="RemoveFromCart(product)"
      class="checkOut font-1 text-xl font-bold p-2 bg-green-300"
    >
     Remove From Cart
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

          await cartService.removeFromCart(product)

          pop.success('deleted')

        } catch (error) {
          logger.log(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
