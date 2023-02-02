<template>
  <div class="">
    <div
      v-if="activeProduct"
      class="text-black p-5 bg-slate-300 py-44 relative"
    >
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 h-full justify-center flex">
          <img
            :src="activeProduct.img"
            alt=""
            class="shadow-lg shadow-slate-400 product-image rounded-sm"
          >
        </div>
        <div class="w-full md:w-1/2 p-5 px-14">
          <div class="">
            <div class="relative">
              <h1 class="text-6xl mb-10 font-bold text-shadow">
                {{ activeProduct.title }}
              </h1>
              <div class="absolute right-0 bottom-0">
                <h1
                  v-if="activeProduct.audience == 'Female'"
                  class="text-8xl opacity-10 font-bold text-shadow "
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
              <p
                class="text-red-400 font-bold text-2xl "
              >
                ${{ activeProduct.price }}
              </p>
            </div>
            <!-- <a
              target="_blank"
              class="mb-2 text-black rounded-md p-2 opacity-75 right-0 mr-10"
              :href="activeProduct.stripe"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/481/481943.png"
                alt="checkout Icon"
                width="40"
                class="checkOut-icon"
              >
            </a> -->
            <div class="">
              <h2 class="font-bold text-gray-400 text-2xl">
                Quantity
              </h2>
              <div class=" w-1/2 mt-2 shadow-md rounded-full ">
                <!-- <input
                  class="bg-gray-200 rounded-lg p-1 shadow-lg"
                  type="number"
                  min="0"
                  max="100"

                  v-model="quantity"
                > -->


<n-input-number v-model:value="quantity" button-placement="both" v-if="data"  />


              </div>
            </div>
          </div>
          <div class="">
            <p class="text-lg text-gray-400 mb-5">
              {{ activeProduct.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="absolute right-24 cursor-none">
        <AddToCart v-if="activeProduct" :productData="productData" />
        <!-- <iframe src="https://embed.lottiefiles.com/animation/44894"></iframe> -->
      </div>
    </div>
    <div v-else class="mt-56 container bg-slate-100">
      <LoaderComponent />
    </div>
  </div>
</template>
<script>
import AddToCart from '~~/components/cart/AddToCart.vue'
import { productsService } from '~~/composables/services/ProductsService.js'

export default {
  components: { AddToCart },
  setup () {
    const route = useRoute()
    const { data } = useSession()
    const quantity = ref(1)
    watchEffect(()=>{
      AppState.itemQty = quantity.value
    })

    onMounted(() => {
      setTimeout(() => {
        getProductById()
      }, 0)
    })
    async function getProductById () {
      try {
        await productsService.getProductById(route.params.id)
      } catch (error) {
        logger.log(error)
      }
    }
    return {
      route,
      quantity,

      account: {},
      itemQty:computed(()=> AppState.itemQty),
      data,
      activeProduct: computed(() => AppState.activeProduct),
      productData: computed(() =>
      {
       let productData = {
         quantity: AppState.itemQty,
        id : AppState.activeProduct.id
       }
       return productData
      }),
      // eslint-disable-next-line require-await
      async checkOut () {
        const { data } = useFetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: [{ id: this.activeProduct.id, quantity: 1 }]
          })
        })
          .then((res) => {
            if (res.ok) {
              return res.json()
            }
            return res.json().then(json => Promise.reject(json))
          })
          .then(({ url }) => {
            window.location = url
          })
          .catch((e) => {
            console.error(e.error)
          })
        console.log(data)

      }
    }
  }
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
