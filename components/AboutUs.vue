<template>
  <div class=" fled md:block flex-wrap py-20 mt-10 flex z-10 relative about-us">

    <div class=" flex-wrap w-full md:w-2/4 px-5 flex flex-col  bg-white py-5">
      <div class="flex justify-start   ">
        <img src="https://cdn-icons-png.flaticon.com/512/7199/7199551.png" alt="goodVibes Image" width="90" class="">
      </div>
      <h3 class=" leading-relaxed text-lg  ">
    Welcome to  the Daily Sun! Our Nuxt.js e-commerce app features a selection of fake men's and women's products that you can browse and view the product details of.
    <br>
   Add a product to your cart and then view it at the Cart page where you can then use stripe checkout to do process a fake payment and then view your past receipts on your account page.
      </h3>


 <CreditCard/>

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
