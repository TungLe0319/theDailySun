<template>
  <div>
    <div>
      <HeroImage />
      <AboutUs />
      <FeaturedProducts />
      <MenFeaturedProducts />
    </div>
  </div>
</template>

<script setup>

import { useProductStore } from '~~/stores/ProductStore'
const productStore = useProductStore()
onMounted(() => {
  setTimeout(() => {
    productStore.getProducts()
    const origin = computed(() => process.env.AUTH_ORIGIN ? process.env.AUTH_ORIGIN : 'http://localhost:3000')
    // logger.log(origin)
  }, 0)
})
</script>

