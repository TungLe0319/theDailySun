<template>
  <div class="pt-24 text-black p-5 bg-slate-300 h-screen relative">
    <div class="  ">
      <div class="w-full md:w-1/2 h-full justify-center flex">
        <h1 class="text-5xl">
          My Cart
        </h1>
      </div>
      <div class="flex">
        <div class="w-full md:w-2/3 p-5 px-14">
          <div class="flex justify-between">
            <div>
              <p>Product</p>
            </div>
            <div class="flex mr-10 gap-x-20">
              <p>Qty</p>
              <p>Price</p>
            </div>
          </div>
          <hr class="mt-3 bg-black">
          <div class="mt-4 relative overflow-y-auto scrollbar-container">
            <div class="relative h-full">
              <div class="p-4">
                <CartProductCard
                  v-for="c in products"
                  :key="c.id"
                  :product="c"
                />

              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full md:w-1/3 p-5 px-14 bg-slate-200 rounded-lg shadow-xl h-1/2"
        >
          <div class="flex flex-col gap-y-3">
            <h2 class="text-2xl">
              Subtotal : <b>{{ cartTotal }}</b>
            </h2>
            <h2 class="text-2xl text-slate-400">
              Est Shipping :
            </h2>
            <h2 class="text-2xl text-slate-400">
              Est Sales Taxes :
            </h2>
            <h2 class="text-2xl text-red-700">
              Order Total :
            </h2>
          </div>
          <div class="mt-3">
            <button
              class="p-3 w-full bg-zinc-900 text-white text-2xl font-bold rounded-sm shadow-lg"
              @click="checkout()"
            >
              Begin Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { computed } from 'vue'
definePageMeta({
  middleware: 'auth'
})
const cartStore = useCartStore()
const productStore = useProductStore()
if (!cartStore.products.length) {
  logger.assert('getting cart')
  cartStore.getCart()
}

const products = computed(() => cartStore?.products)
logger.log(products.value)
const cartTotal = computed(() => cartStore?.total)
 async function checkout(){
 cartStore.checkout(cartStore.products)


}
</script>

<style lang="scss" scoped>
hr {
  padding: 0.5px;
}

.scrollbar-container {
  /* Add overflow-y property to create a scrollbar on the y-axis */

  /* Add webkit prefix to style the scrollbar */
  -webkit-scrollbar {
    width: 2px;
    background-color: transparent;
  }

  /* Style the thumb (draggable part of the scrollbar) */
  -webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: #a0aec0;
  }

  /* Add padding to hide the native scrollbar */
  padding-right: 2px;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

::-webkit-scrollbar {
  width: 4px;
  border-radius: 50em;
  background-color: #a0aec0;
}

.overflow-y-auto {
  overflow-y: auto !important;
  height: 1000px;
}

.inset-y-0 {
  top: 0;
  bottom: 0;
}

.right-0 {
  right: 0;
}

.w-5 {
  width: 5px;
}

.h-full {
  height: 100%;
}

.bg-gray-600 {
  background-color: #9b9b9b;
}

.bg-white {
  background-color: #fff;
}

.rounded-sm {
  border-radius: 0.125rem;
}
</style>
