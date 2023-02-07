<template>
  <div>
    <div :class="products? ' block ' : ' hidden'">
      <HeroImage class=" " />
      <AboutUs />

      <FeaturedProducts class="" />
      <!-- <MenFeaturedProducts /> -->
    </div>
    <!-- <div >
      <LoadingAnimation />
    </div> -->
  </div>
</template>


<script>

export default {
  setup () {
    onMounted(() => {
      setTimeout(() => {
        getProducts()
      }, 0)
    })
    let isLoading = true
    async function getProducts () {
      try {
        await productsService.getProducts()
        isLoading = false
      } catch (error) {
        logger.error(error)
      }
    }
    return {
      isLoading,
      products: computed(() => AppState.products)
    }
  }
}
</script>
