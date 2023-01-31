<template>
  <div class="">
    <button
      @click="RemoveFromCart(product)"
      class="checkOut font-1 text-xl font-bold p-2 bg-green-300"
    >
     Remove From Cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: { typeof: Object },
  },
  setup() {
    return {
      async RemoveFromCart(product) {
        try {

    let cart = await $trpc.cart.findUnique.useQuery({
           where: { userId: AppState.account.id },
        });

        let deleted =  await $trpc.cart.update.mutate({
             where: { id:cart.data.value.id },
            data:{
              products:{
                delete:{
                  id:product.id
                }
              }
            }

          })
          pop.success('deleted')
          logger.log(deleted)
        } catch (error) {
          logger.log(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
