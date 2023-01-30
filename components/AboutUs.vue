<template>
  <div class="p-3 py-20 mt-10 flex z-10 relative about-us">
    <div class="w-2/4 relative   ">
      <img src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="h-full object-cover shadow-xl rounded-md">
    </div>
    <div class=" w-2/4 px-5 flex flex-col  bg-white py-5">
      <div class="flex justify-start   d">
        <img src="https://cdn-icons-png.flaticon.com/512/7199/7199551.png" alt="goodVibes Image" width="90" class="">
      </div>
      <h3 class=" leading-relaxed text-lg  ">
    Welcome to Sunny Vibes! Our Nuxt e-commerce app features a selection of fake men's and women's products, all with the convenience of Stripe checkout. Our app also includes Nuxt SEO optimization to improve your shopping experience. You can easily add products to your cart and view past purchases.
      </h3>

    </div>
  </div>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.about-us::before{
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
content: '';
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(243,232,255,1) 100%);
}
.text-box{
  transform: translateX(530px) !important;
}

.absolute{
  top: 40px;
  left: 400px;
width: 500px;
//when screen is 768px OR LESS
@media only screen and (max-width: 768px){

}
}
</style>
