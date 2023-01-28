<template>
  <div>
    <HeroImage />
    <AboutUs />

    <FeaturedProducts class="" />
    <MenFeaturedProducts/>
  </div>
</template>

<script>
import { productsService } from '../composables/services/ProductsService'

export default {
  setup () {
    onMounted(() => {
      setTimeout(() => {
        getProducts()
      }, 0)
    })
    async function getProducts () {
      try {
        await productsService.getProducts()
      } catch (error) {
        logger.error(error)
      }
    }
    return {

    }
  }
}
</script>
