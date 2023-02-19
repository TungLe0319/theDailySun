<template>
  <div class="">
    <div
      v-if="activeProduct"
      class="text-black p-5 bg-slate-300 md:py-44 py-20 relative"
    >
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 h-full justify-center flex pb-10 md:pb-0">
          <img
            :src="activeProduct.img"
            alt=""
            class="shadow-lg shadow-slate-400 product-image rounded-sm"
          />
        </div>
        <div class="w-full md:w-1/2 p-5 md:px-14">
          <div class="">
            <div class="relative">
              <h1 class="text-4xl md:text-6xl mb-10 font-bold text-shadow">
                {{ activeProduct.title }}
              </h1>
              <div class="absolute right-0 bottom-0">
                <h1
                  v-if="activeProduct.audience == 'Female'"
                  class="text-6xl md:text-8xl opacity-10 font-bold text-shadow"
                >
                  WOMEN
                </h1>
                <h1 v-else class="text-8xl opacity-10 font-bold text-shadow">
                  Men
                </h1>
              </div>
            </div>
          </div>
          <div class="flex justify-between mb-10">
            <div class="  ">
              <p class="text-red-400 font-bold text-2xl">
                ${{ activeProduct.price }}
              </p>
            </div>

            <div class="">
              <h2 class="font-bold text-gray-400 text-2xl">Quantity</h2>
              <div class="w-1/2 mt-2 shadow-md rounded-full">
                <n-input-number
                  v-model:value="quantity"
                  button-placement="both"
                />
              </div>
            </div>
          </div>
          <div class="">
            <p class="text-lg font-semibold text-gray-600 mb-5">
              {{ activeProduct.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="absolute right-24 cursor-none">
        <AddToCart v-if="activeProduct && user" :product-data="productData" />
        <nuxt-link v-else to="/cart">
          <h3 class="text-2xl">Sign in to add to cart</h3>
        </nuxt-link>

        <button
          v-if="user?.role == 'ADMIN'"
          class="checkOut font-1 text-xl font-bold text-white mt-10 p-3 rounded-md bg-slate-700"
          @click="deleteProduct()"
        >
          Delete ADMIN ONLY
        </button>

        <!-- <iframe src="https://embed.lottiefiles.com/animation/44894"></iframe> -->
      </div>

      <!--  SECTION REVIEWS -->
      <div class="mt-10">
        <CreateReview />
      </div>
    </div>
    <div v-else class="mt-56 container bg-slate-100">
      <LoaderComponent />
    </div>
  </div>
</template>

<script setup>
// import { computed } from 'vue'

import AddToCart from "~~/components/cart/AddToCart.vue";
import CreateReview from "~~/components/review/CreateReview.vue";
const { data: user } = useSession();

const productStore = useProductStore();
const route = useRoute();
productStore.getProductById(route.params.id);
const quantity = ref(1);
const activeProduct = computed(() => productStore.activeProduct);
const productData = computed(() => {
  const productData = productStore.activeProduct;
  productData.quantity = quantity.value;
  return productData;
});

async function deleteProduct(id) {
  let productIDS = {
    id: activeProduct.value.id,
    stripeID: activeProduct.value.stripeID,
  };
  productStore.delete(productIDS);
}
</script>

<style lang="scss" scoped>
.product-image {
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

n-input-number {
  background-color: #d42222 !important;
}
</style>
