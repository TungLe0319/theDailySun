<template>
  <div class=" text-black py-24  bg-slate-300 flex justify-center px-8">
    <div class="  ">
      <div class="w-full md:w-1/2  justify-center flex">
        <h1 class="text-5xl">
          Products
        </h1>
      </div>
      <div class="mt-4 ">
        <div class=" flex flex-wrap justify-between gap-1">
          <div v-for="i in products" :key="i" class="    w-1/6 py-2 ">
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
    const { data: products } = useFetch('/api/products')

    onMounted(() => { })
    const route = useRoute()

    // async function getUserCart () {
    //   try {
    //   } catch (error) {
    //     logger.log(error)
    //   }
    // }

    return {
      products,
      // products: computed(() => AppState.products),
      route,
      activeProduct: computed(() => AppState.activeProduct),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
