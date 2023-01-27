<template>
  <div v-if="activeProduct" class=" pt-20 text-black p-5 bg-slate-300 h-screen relative">
    <div class="flex flex-wrap  ">
      <div class=" w-full md:w-1/2 h-full justify-center flex  ">
        <img :src="activeProduct.img" alt="" class=" shadow-lg  shadow-slate-400 product-image rounded-sm">
      </div>
      <div class=" w-full md:w-1/2 p-5 px-14">
        <div class="">
<div class="relative">
   <h1 class="text-6xl mb-10 font-bold text-shadow ">
            {{ activeProduct.title }}
          </h1>
          <div class="absolute   right-0 bottom-0">
            <h1 class="text-8xl opacity-10 font-bold cursor-no">WOMEN</h1>
          </div>
</div>

        </div>

        <div class="flex justify-between mb-10">
          <div class=" rounded-lg bg-white p-5 shadow-md">

            <p class="text-red-400 font-bold text-2xl">
              ${{ activeProduct.price }}
            </p>

          </div>
             <a  target="_blank" class="mb-2  text-black  rounded-md p-2 opacity-75 right-0 mr-10" :href="activeProduct.stripe"> <img src="https://cdn-icons-png.flaticon.com/512/481/481943.png" alt="checkout Icon" width="40" class="checkOut-icon"> </a>
          <div class="">
            <h2 class="font-bold text-gray-400 text-2xl">
              Quantity
            </h2>
            <div class="relative inline-block">
              <input class=" bg-gray-200 rounded-lg p-1 shadow-lg" type="number" min="0" max="1" value="1">
            </div>
          </div>
        </div>
        <div class="">
            <p class="text-xl text-gray-600 mb-5">
            {{ activeProduct.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="absolute right-24 cursor-none ">
      <!-- <iframe src="https://embed.lottiefiles.com/animation/44894"></iframe> -->
    </div>
  </div>
  <div v-else class="mt-56 container bg-slate-100 ">
    <LoaderComponent />
  </div>
</template>

<script>
import { productsService } from '~~/composables/services/ProductsService.js'

export default {

  setup () {
    onMounted(() => {
      setTimeout(() => {
        getProductById()
      }, 0)
    })
    const route = useRoute()

    async function getProductById () {
      try {
        logger.log(route.params.id)
        await productsService.getProductById(route.params.id)
      } catch (error) {
        logger.log(error)
      }
    }

    // async function clearCart () {

    // }
    // console.log(route.params.id);
    return {
      route,
      activeProduct: computed(() =>
        AppState.activeProduct
      )

    }
  }
}
</script>

<style lang="scss" scoped>
.product-image{
  height: auto;
  width: 100% !important;
  object-fit: cover;
   animation-duration: 1.5s;
  animation-name: slidein;
border-radius: 8px;
}
@keyframes slidein {
  from {
    margin-right: 100%;
    width: 300%;
    opacity: 0;
    filter: blur(10px);
  }

  to {
    margin-right: 0%;
    width: 100%;
  }
}
</style>
