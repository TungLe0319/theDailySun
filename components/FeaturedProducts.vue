<template>
  <div class="bg-purple-100 py-20 female-featured relative">

    <div class="text-center my-5 container flex flex-col">
      <h1 class="mb-10 md:text-6xl text-4xl text-shadow">Featured Products</h1>
      <h2 class="text-4xl mb-2 ff">Empower your style</h2>
      <p class=" ">
        Upgrade your accessory game with our featured selection of women's
        glasses
      </p>
    </div>
    <div class="mt-10 md:flex relative">
      <div
        class="glasses-title flip text-center absolute text-shadow bottom-0 left-0"
      >
        Glasses
      </div>
      <div id="card-container" class="flex gap-2 justify-center w-full">
        <ProductCard v-for="i in glasses" :key="i.id" class="" :product="i" />
      </div>
    </div>

    <div class="text-center mt-36 mb-5 container flex flex-col">
      <h1 class="text-4xl mb-2 ff">Feel great with your look</h1>
      <p class=" ">
        Complete your look with our curated collection of featured women's hats
      </p>
    </div>

    <div class="md:flex relative">
      <div id="card-container" class="gap-2 justify-center w-full order-2" v-if="hats">
        <ProductCard
          v-for="h in hats"
          :key="h.id"
          class="productCard"
          :product="h"
        />
      </div>
      <LoaderComponent v-else />
      <div
        class="glasses-title flip text-center absolute bottom-20 right-0 text-shadow order-1"
      >
        Hats
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { computed } from 'vue'

export default {
  setup () {
    onMounted(() => {

    })

    return {
      glasses: computed(() => AppState.products.filter(p => p.type == "Glasses" && p.audience == "Female")),
      hats:computed(() => AppState.products.filter(p => p.type == "Hat" && p.audience == "Female") )
    }
  }
}
</script>
 -->

<script setup>
import { computed, onMounted } from "vue";

import { useProductStore } from "~~/stores/ProductStore";
const productStore = useProductStore();
onMounted(() => {
  setTimeout(() => {
    productStore.getProducts();
  }, 0);
});

const products = computed(() => productStore.products);
// const glasses = computed(() => productStore.products.filter(p => p.type == "Glasses" && p.audience == "Female"))
const glasses = computed(() => {
  const filteredProducts = productStore?.products?.filter(
    (p) => p.type == "Glasses" && p.audience == "Female"
  );
  return filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 5);
});

// const hats = computed(() => productStore.products.filter(p => p.type == "Hat" && p.audience == "Female"))

const hats = computed(() => {
  const filteredProducts = productStore?.products?.filter(
    (p) => p.type == "Hat" && p.audience == "Female"
  );

  return filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 5);
});
</script>

<!-- <script setup>
const {data: products} = await useAsyncData()
</script> -->

<style lang="scss" scoped  >
.female-featured::before {
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  content: "";
  background: rgb(243, 232, 255);
  background: linear-gradient(
    180deg,
    rgba(243, 232, 255, 1) 0%,
    rgba(255, 237, 213, 1) 100%
  );
}
.flip {
  opacity: 75%;

  transform: rotate(180deg);
  writing-mode: vertical-rl;
  font-size: 100px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  background-image: linear-gradient(to bottom, aquamarine, orangered);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {

      transform: rotate(0deg) !important;

  }
}
#card-container {
  display: flex;
}
//when screen is 768px OR LESS
@media only screen and (max-width: 768px) {
  #card-container {
    display: block !important;
    text-align: center !important;
    padding: 0px 20px;
  }
  .productCard {
    margin: auto;
  }
}
</style>
