class CartService {
  //   async addToCart (productId) {
  //     // let cart = await useFetch('/api/cart',{
  //     //   method:"POST",
  //     // })
  //     // let cart = await $trpc.cart.findUnique.useQuery({
  //     //   where: { userId: AppState.account.id },
  //     // });
  //     // if (!cart) {
  //     //   cart = await $trpc.cart.create.mutate({
  //     //     data: {
  //     //       products: {
  //     //         connect: {
  //     //           productId: productId,
  //     //         },
  //     //       },
  //     //       user: {
  //     //         connect: {
  //     //           id: AppState.account.id,
  //     //         },
  //     //       },
  //     //     },
  //     //   });
  //     // } else {
  //     //   cart = await $trpc.cart.update.mutate({
  //     //     where: {
  //     //       userId: AppState.account.id,
  //     //     },
  //     //     data: {
  //     //       products: {
  //     //         connect: {
  //     //           id: AppState.activeProduct.id,
  //     //         },
  //     //         update: {
  //     //           data: {
  //     //             quantity: {
  //     //               increment: 1,
  //     //             },
  //     //           },
  //     //           where: { id: AppState.activeProduct.id },
  //     //         },
  //     //       },
  //     //     },
  //     //   });
  //     // }
  //   }
  //   // async removeFromCart (product) {
  //     // await useFetch('/')
  //   }
  async getCartByUserId (id) {
    const res = await useFetch(`/api/cart/${id}`)
    logger.log(res.data)
    // return cart
  }
}
export const cartService = new CartService()
