<template>
  <div class=" container mt-10">
    <div id="card-container" class=" flex gap-2 justify-center w-full">
      <ProductCard v-for="i in products" :key="i" class="" :product="i" />
    </div>
  </div>
</template>

<script setup>
// import { computed } from 'vue'
const { data: products } = useFetch('/api/products/all')

</script>
