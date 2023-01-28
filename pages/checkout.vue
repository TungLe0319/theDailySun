<template>
  <div>
  asdfsadf
  </div>
</template>
<script>
import { productsService } from '~~/composables/services/ProductsService.js'

export default {

  setup () {
    onMounted(() => {
      setTimeout(() => {
        getProductById()
      }, 0)
    })
    const route = useRoute()

    async function getProductById () {
      try {
        logger.log(route.params.id)
        await productsService.getProductById(route.params.id)
      } catch (error) {
        logger.log(error)
      }
    }

    // async function clearCart () {

    // }
    // console.log(route.params.id);
    return {
      route,
      activeProduct: computed(() =>
        AppState.activeProduct
      )

    }
  }
}
</script>

<!-- <script setup>
import { productsService } from '../../composables/services/ProductsService'

definePageMeta({ middleware: 'auth' })
onMounted(() => {
  getProductById()
})
const route = useRoute()
const { data } = useSession()

async function getProductById () {
  try {
    logger.log(data.value)
    await productsService.getProductById(route.params.id)
  } catch (error) {
    logger.log(error)
  }
}
// getProductById()
const activeProduct = computed(() => AppState.activeProduct)

</script> -->

<style lang="scss" scoped>
.product-image{
  height: auto;
  width: 100% !important;
  object-fit: cover;
   animation-duration: 1.5s;
  animation-name: slidein;
border-radius: 8px;
}
@keyframes slidein {
  from {
    margin-right: 100%;
    width: 300%;
    opacity: 0;
    filter: blur(10px);
  }

  to {
    margin-right: 0%;
    width: 100%;
  }
}
</style>
