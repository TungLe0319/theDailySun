<template>
  <div>
    <HeroImage />
    <CallToAction/>
    <FeaturedProducts/>
  </div>
</template>

<script>
export default {
  setup () {
    onMounted(() => {

      getProducts()
    })
    async function getProducts () {
      try {
       const {data : products} = await useFetch('/api/products/all')

AppState.products = products.value
console.log(AppState.products);

      } catch (error) {
        console.log(error)
      }
    }
    return {

    }
  }
}
</script>
