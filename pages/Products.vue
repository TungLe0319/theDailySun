<template>
  <div class="pt-24 text-black p-5 bg-slate-300 h-screen relative">
    <div class="  ">
      <div class="w-full md:w-1/2 h-full justify-center flex">
        <h1 class="text-5xl">
          Products
        </h1>
      </div>
      <div class="mt-4 ">
        <div class=" flex  gap-1">
          <div v-for="i in products" :key="i" class="    ">
            <ProductCard :product="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    // const { data: products } = useFetch('/api/products/all')

    onMounted(() => { })
    const route = useRoute()

    // async function getUserCart () {
    //   try {
    //   } catch (error) {
    //     logger.log(error)
    //   }
    // }

    return {
      products: computed(() => AppState.products),
      route,
      activeProduct: computed(() => AppState.activeProduct)
    }
  }
}
</script>

<style lang="scss" scoped>
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
