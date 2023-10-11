<template>
  <div class="flex justify-center md:py-20  z-10 relative about-us">
    <div class="flex-wrap w-full md:w-3/4 px-5 flex flex-col bg-white py-5">
      <div class="my-4 text-center">
        <h1 class="mb-10 md:text-8xl text-4xl text-shadow">Welcome to The Daily Sun!</h1>
      </div>
 <ul class="text-center space-y-4 ">
  <li ><h2 class="mb-5 text-xl font-semibold">Nuxt.js E-commerce app</h2> </li>
  <li>Features a selection of fake Men's and Women's products that can be browsed.</li>
  <li>Add a product to your cart.</li>
  <li>Proceed to the Stripe checkout to process a fake payment.</li>
  <li>View your past receipts on your account page.</li>
</ul>

<hr class="mt-5">

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





</style>
