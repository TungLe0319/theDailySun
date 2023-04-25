<template>
  <div class="flex justify-center md:py-20 md:mt-10 z-10 relative about-us">
    <div class="flex-wrap w-full md:w-3/4 px-5 flex flex-col bg-white py-5">
      <div class="my-4 text-center">
        <h1 class="text-3xl">Welcome to The Daily Sun!</h1>
      </div>
      <h3 class="leading-relaxed text-center text-lg">
        Our Nuxt.js E-commerce app features a selection of fake Men's and
        Women's products that you can browse and view the details of.
        <br />
        Add a product to your cart where you
        can then proceed to the stripe checkout to do process a fake payment and then view
        your past receipts on your account page.
      </h3>

      <CreditCard />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about-us::before {
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;

  content: "";
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(243, 232, 255, 1) 100%
  );
}

.text-box {
  transform: translateX(530px) !important;
}

.absolute {
  top: 40px;
  left: 400px;
  width: 500px;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
  }
}
</style>
