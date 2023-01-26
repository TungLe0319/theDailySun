<template>
  <div>
    <HeroImage />
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
        const { data: products } = await useFetch('/api/products/all')
        console.log(products.value)
      } catch (error) {
        console.log(error)
      }
    }
    return {

    }
  }
}
</script>
