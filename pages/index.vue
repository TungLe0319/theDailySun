<template>
  <div>
    <HeroImage />
    <CallToAction />
    <FeaturedProducts />
  </div>
</template>

<script>
export default {
  setup () {
    // onMounted(() => {
    //   getProducts()
    // })
    // async function getProducts () {
    //   try {
    //     const { data: products } = await useFetch('/api/products/all')

    //     AppState.products = products.value
    //     logger.log(AppState.products)
    //   } catch (error) {
    //     logger.error(error)
    //   }
    // }
    return {

    }
  }
}
</script>
