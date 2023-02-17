<template>
<div class=" bg-orange-100 py-20">
  <div class="text-center my-5 container flex flex-col ">
    <h1 class="text-4xl mb-2   ff    ">
     Power your confidence
    </h1>
    <p class=" ">
    Upgrade your accessory game with our  featured selection of men's glasses
    </p>
  </div>
    <div class="    mt-10   flex relative ">
  <div class="glasses-title flip  text-center  absolute text-shadow bottom-0 left-0"> Glasses </div>
    <div id="card-container" class=" flex gap-2 justify-center w-full" v-if="glasses">
      <ProductCard v-for="i in glasses" :key="i" class="" :product="i"  />
    </div>

    <LoaderComponent v-else />
  </div>



  <div class="text-center mt-36 mb-5 container flex flex-col ">
    <h1 class="text-4xl mb-2   ff    ">
    Feel Fresh
    </h1>
    <p class=" ">
    Complete your look with our curated collection of featured men's hats
    </p>
  </div>





     <div class="       md:flex relative ">

    <div id="card-container" class="   gap-2 justify-center w-full" v-if="hats">
      <ProductCard v-for="h in hats" :key="h" class="productCard " :product="h"  />

    </div>
 <LoaderComponent v-else/>
   <div class="glasses-title flip  text-center  absolute  text-shadow  bottom-20 right-0 "> Hats </div>
  </div>



<div class="flex justify-center mt-20">
<nuxt-link to="Products" class="text-center text-4xl flex justify-center  underline-offset-3 underline">
<h3 class="text-center">View All Products</h3>
</nuxt-link>
</div>

</div>
</template>


<script setup >

import { computed, onMounted } from 'vue'


import { useProductStore } from '~~/stores/ProductStore';
const productStore = useProductStore()
onMounted(()=>{
setTimeout(() => {
productStore.getProducts()
}, 1);
})




const glasses = computed(() => {
  const filteredProducts = productStore?.products?.filter(p => p.type == "Glasses" && p.audience == "Male");

  return filteredProducts
  .sort(() => 0.5 - Math.random())
  .slice(0,5);
});

const hats = computed(() => {
  const filteredProducts = productStore?.products?.filter(p => p.type == "Hat" && p.audience == "Male");

  return filteredProducts
  .sort(() => 0.5 - Math.random())
  .slice(0,5);
});
</script>


<!-- <script setup>
const {data: products} = await useAsyncData()
</script> -->

<style lang="scss" scoped >
.flip{
  color: rgb(176, 215, 233);
  opacity: 75%;

    transform: rotate(180deg);
    writing-mode: vertical-rl;
    font-size: 100px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    //when screen is 768px OR LESS
    @media only screen and (max-width: 768px){
position: static;
    }

}
#card-container{
  display: flex;
}
//when screen is 768px OR LESS
@media only screen and (max-width: 768px){
  #card-container {
    display: block !important;
    text-align: center !important;
    padding: 0px 20px;
  }
  .productCard {
    margin:  auto;

  }
}

</style>
