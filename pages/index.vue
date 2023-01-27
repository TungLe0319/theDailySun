<template>
  <div>
    <HeroImage />
    <CallToAction/>
    <FeaturedProducts/>
    <AboutUs/>
  </div>
</template>

<script>
import { productsService } from "~~/composables/services/ProductsService.js"

export default {
  setup () {
    onMounted(() => {


  setTimeout(() => {
      getProducts()
  }, 0) // 1 seems to work better for me than 0
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
