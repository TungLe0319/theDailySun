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
  props: {
    productId: { typeof: String },
  },
  setup() {

    return {
      async addToCart(productId) {
const {$trpc} = useNuxtApp()
        let cart = await $trpc.cart.findUnique.useQuery({
          where: { userId: AppState.account.id },
        });

        if (!cart) {
          cart = await $trpc.cart.create.mutate({
            data: {
              products: {
                connect: {

                  productId: productId,
                },
              },
              user: {
                connect: {
                  id: AppState.account.id,
                },
              },
            },
          });
          pop.success(`Added ${AppState.activeProduct.title} to your cart`);
        }
        else {
          cart = await $trpc.cart.update.mutate({
            where: {
              userId: AppState.account.id
            },
            data: {
              products: {
               connect:{
                id: AppState.activeProduct.id
               }
              },
            },
          });

        }
   pop.success(`Added ${AppState.activeProduct.title} to your cart`);

      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
