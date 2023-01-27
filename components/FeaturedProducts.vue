<template>
<div class="">
  <div class="text-center my-5 container flex flex-col ">
    <h1 class="text-4xl mb-2   ff    ">
      Empower your style
    </h1>
    <p class=" ">
    Upgrade your accessory game with our  featured selection of women's hats
    </p>
  </div>
    <div class="    mt-10   flex relative ">
  <div class="glasses-title flip  text-center  absolute fixed bottom-0 left-0"> Glasses </div>
    <div id="card-container" class=" flex gap-2 justify-center w-full" v-if="glasses">
      <ProductCard v-for="i in glasses" :key="i" class="" :product="i"  />

    </div>
 <LoaderComponent v-else/>
  </div>



  <div class="text-center mt-36 mb-5 container flex flex-col ">
    <h1 class="text-4xl mb-2   ff    ">
     Feel great with your look
    </h1>
    <p class=" ">
    Complete your look with our curated collection of featured women's hats
    </p>
  </div>





     <div class="       md:flex relative ">

    <div id="card-container" class="   gap-2 justify-center w-full" v-if="hats">
      <ProductCard v-for="h in hats" :key="h" class="productCard " :product="h"  />

    </div>
 <LoaderComponent v-else/>
   <div class="glasses-title flip  text-center  absolute fixed bottom-20 right-0 "> Hats </div>
  </div>

</div>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    onMounted(() => {

    })

    return {
      glasses: computed(() => AppState.products.filter(p => p.type == "Glasses")),
      hats:computed(() => AppState.products.filter(p => p.type == "Hat") )
    }
  }
}
</script>
<!-- <script setup>
const {data: products} = await useAsyncData()
</script> -->

<style lang="scss">
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
