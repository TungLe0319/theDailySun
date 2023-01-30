<template>
  <div class="">
     <button
          @click="addToCart(productId)"
          class="checkOut font-1 text-xl font-bold p-2 bg-green-300"
        >
         AddToCart
        </button>


  </div>
</template>


<script>
export default {
  props:{
productId:{typeof: String}
  },
  setup(){


    return {



          async addToCart(productId){



let cart = await zen.cart.findUnique.useQuery({
  where:{userId: AppState.account.id }
})

 if (!cart) {
   cart = await zen.cart.create.mutate({
    data:{
      products: {
        create: {
        product: AppState.activeProduct,
        productId : productId,

        }
      },
     user:{
      connect:{
        id: AppState.account.id
      }
     },


    }
  })
pop.success(`Added ${AppState.activeProduct.title} to your cart`)




 }
 logger.log(cart)
 return cart
}
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
