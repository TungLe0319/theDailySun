<template>

    <div class=" pt-24 text-black p-5 bg-slate-300 h-screen relative">
      <div class="  ">
        <div class=" w-full md:w-1/2 h-full justify-center flex  ">
<h1 class="text-5xl">My Cart {{products}}</h1>
        </div>
        <div class=" w-full md:w-2/3 p-5 px-14">
<div class="flex justify-between ">
 <div >
   <p>Product</p>
 </div>
  <div class="flex ml-4   gap-x-12">
    <p>Qty</p>
    <p>Price</p>
    <p>Total</p>
  </div>
</div>
<hr  class="mt-3 bg-black p-1 rounded-lg">








        </div>
      </div>

    </div>


</template>
<script>

export default {

  setup () {


    onMounted(() => {

    })
    const route = useRoute()

    async function getUserCart() {
      try {

      } catch (error) {
        logger.log(error)
      }
    }



    return {
      route,
      activeProduct: computed(() =>
        AppState.activeProduct
      ),


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
