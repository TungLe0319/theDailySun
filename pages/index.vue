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
    const res = await fetch('/products',{
      method: "GET"
    })
    console.log(res);
   } catch (error) {
   console.log(error)
   }
}
    return {

    }
  }
}
</script>
