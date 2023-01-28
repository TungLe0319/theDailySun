<template>
  <div class="relative shadow-xl product-card rounded-lg">
    <nuxt-link :to="`/products/${product.id}`">
      <img class=" object-cover     image rounded-lg shadow-xl shadow-slate-400 transition-all" :src="product.img" alt="image">
    </nuxt-link>
    <div class="absolute z-20   w-full  opacity-0 transition-opacity duration-300">
      <div class=" text-white  text-center  ">
        <h4 class="text-xl  text-shadow font-bold mt-10 mb-10   fire-effect-milo">
          {{ product.title }}
        </h4>

        <!-- <a target="_blank" class="z-30  fixed bottom-0 mb-2  bg-emerald-300 text-black  rounded-md p-2 opacity-75 right-0 mr-10" :href="product.stripe"> <img src="https://cdn-icons-png.flaticon.com/512/481/481943.png" alt="checkout Icon" width="40" class="checkOut-icon"> </a> -->
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
.checkOut-icon{
  width: 30px !important;
}
.fire-effect-milo  {
    padding: 0 10px 0 0;
    width: 75%;
    border-right: 1px solid #fff;
    text-align: right;
    opacity: 1;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-40px,0,0);
    transform: translate3d(0px,0,0);
}
.product-card{
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
   width: 150px;
   height: 400px;

   //when screen is 768px OR LESS
   @media only screen and (max-width: 768px){
width: 100%;
 margin-top: 8px;
   }
}


.product-card:hover{
//when screen is 768px OR LESS
@media only screen and (min-width: 768px){
width: 300px;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}
}

.product-card img{

  height: 100%;
    @media only screen and (max-width: 768px){
width: 100%;
   }
}

.product-card .absolute {
   transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
    transform: translateX(-50px);
    left: 0;

    top: 0;
//when screen is 768px OR LESS
@media only screen and (max-width: 768px){
opacity: 50%;
}
}
.product-card:hover .absolute {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;

opacity: 1;
   transform: translateX(0px);

}
.product-card:hover img{
  //when screen is 768px OR LESS
  @media only screen and (min-width: 768px){
  filter: brightness(80%);
width: 300px;
  transition: all 3.3s ease-out !important;

  .product-card:not(:hover) img{
    filter: grayscale(100%);
  }
  }

}

</style>
