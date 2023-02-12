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
import { computed, onMounted } from "vue";

import { useProductStore } from "~~/stores/ProductStore";
const productStore = useProductStore();
onMounted(() => {
  setTimeout(() => {
    productStore.getProducts();
  }, 0);
});
</script>
