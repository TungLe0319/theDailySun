<template>
  <div class="page-container">
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

                  <nuxt-link class="shop-now-link" to="/products">
                    Shop Now
                  </nuxt-link>
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
              Order Total : <b>${{ total }}</b>
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
.page-container {
  @apply pt-24 text-black p-5 bg-slate-300 h-screen relative;
}

.shop-now-link {
  @apply p-3 w-full flex justify-center bg-zinc-900 text-white text-2xl font-bold rounded-sm shadow-lg hover:bg-zinc-900/90 hover:shadow-md transition-all;
}

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
</style>
