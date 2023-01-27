<template>
  <div class="    mt-10   flex  ">
    <div class="glasses-title flip  text-center">
      Glasses
    </div>
    <div v-if="products" id="card-container" class=" flex gap-2 justify-center w-full">
      <ProductCard v-for="i in products" :key="i" class="" :product="i" />
    </div>
    <LoaderComponent v-else />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    onMounted(() => {
      // getProducts()
    })
    // async function getProducts () {
    //   try {

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    return {
      products: computed(() => AppState.products)
    }
  }
}
</script>
<!-- <script setup>
const {data: products} = await useAsyncData()
</script> -->

<style lang="scss">
.flip{
  color: rgb(233, 227, 176);
  opacity: 75%;
  margin-left: 30px;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    font-size: 100px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;

}
</style>
