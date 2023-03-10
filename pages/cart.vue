<template>
  <div class="pt-24 text-black p-5 bg-slate-300 h-screen relative">
    <div class="  ">
      <div class="w-full md:w-1/2 h-full justify-center flex">
        <h1 class="text-5xl">My Cart</h1>
      </div>
      <div class="flex flex-wrap">
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
          <hr class="mt-3 bg-black" />
          <div class="mt-4 relative overflow-y-auto scrollbar-container">
            <div class="relative md:h-full">
              <div class="p-4">
                <CartProductCard
                  v-if="products?.length >= 1"
                  v-for="c in products"
                  :key="c.id"
                  :product="c"
                />
                <div
                  v-else
                  class="container flex flex-col gap-y-10 cursor-none"
                >
                  <h1 class="text-4xl text-center">Your Cart Is Empty</h1>
                  <iframe
                    src="https://embed.lottiefiles.com/animation/629"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="products?.length >= 1"
          class="w-full md:w-1/3 p-5 px-14 bg-slate-200 rounded-lg shadow-xl h-1/2"
        >
          <div class="flex flex-col gap-y-3">
            <h2 class="text-2xl text-red-700">
              Order Total : <b>${{ total}}</b>
            </h2>
          </div>
          <div class="mt-3">
            <button
              v-if="products?.length >= 1"
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
definePageMeta({
  middleware: "auth",
});
const cartStore = useCartStore();

onMounted(() => {
  setTimeout(() => {
    cartStore.getCart();
  }, 1);
});

const products = computed(() => cartStore?.products);
const total = useState("total", () => cartStore?.total);
watch(
  () => cartStore?.total,
  (newTotal) => {
    
    total.value = newTotal;
  }
);

async function checkout() {
  cartStore.checkout(cartStore?.products);
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
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: 400px;
  }
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
