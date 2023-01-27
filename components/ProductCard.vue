<template>

    <div class="relative shadow-xl product-card rounded-lg">
       <nuxt-link :to="`/products/${product.id}`">
      <img class=" object-cover     image rounded-lg shadow-xl shadow-slate-400 transition-all" :src="product.img" alt="image">
 </nuxt-link>
      <div class="absolute z-20   w-full  opacity-0 transition-opacity duration-300">
        <div class=" text-white mt-10 text-center  ">
          <h4 class="text-3xl font-bold text-shadow   d">
            {{ product.name }}
          </h4>
          <p> {{ product.name }}</p>

            <NA color="#8a2be2" target="_blank" class="z-10 bg-slate-200 text-black rounded-md p-2 opacity-75 " :href="product.stripe">Buy Now</NA>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  props: {
    product: { type: Object, required: true }
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.product-card{
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
   width: 150px;
   height: 400px;
}

.product-card:hover{
width: 300px;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}

.product-card img{

  height: 100%;
}

.product-card .absolute {
   transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
    transform: translateX(-50px);
    left: 0;
    bottom: 30px;

}
.product-card:hover .absolute {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
border-radius: 8px;
opacity: 1;
   transform: translateX(0px);

}
.product-card:hover img{
  filter: brightness(80%);
width: 300px;
  transition: all 3.3s ease-out !important;

  .product-card:not(:hover) img{
    filter: grayscale(100%);
  }
}

</style>
