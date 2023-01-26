<template>
  <div>
  <HeroImage/>

  </div>
</template>


<script>
export default {
  setup () {
    onMounted(() => {
getProducts()
    })
async  function getProducts (){
 try {
const { data: products} = useFetch('/api/products')
console.log({ data: products});
   } catch (error) {
   console.log(error)
   }
}
    return {

    }
  }
}
</script>
