<template>
  <div class="">
    <button
      class="checkOut font-1 text-xl font-bold p-2 rounded-md px-4  flex gap-x-4"

      @click="test(productData)"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/8358/8358970.png" alt="cart icon" width="30">  Add To Cart
    </button>

  </div>
</template>

<!-- <script>
import { cartService } from '../../composables/services/CartService.js'
export default {
  props: {
    productData: { typeof: Object }
  },
  setup () {
    return {
      async addToCart (productData) {
        try {
          logger.log(productData)
          await cartService.addToCart(productData)
          pop.success(`Added ${AppState.activeProduct.title} to your cart`)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
}
</script>

 -->

<script setup>
import { computed, onMounted } from 'vue'
// const {data} = useSession()
const props = defineProps({
  productData: { typeof: Object }
})

const { productData } = toRefs(props)
const cartStore = useCartStore()

 async function test(productData){

  // logger.log(productData)
  cartStore.add(productData)
  pop.toast(`Added To Cart`,'success','top-end',1500)
 }
</script>

<style lang="scss" scoped></style>
