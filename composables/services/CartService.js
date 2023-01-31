
 const { $trpc } = useNuxtApp();
class CartService {

  async addToCart(productId) {
    const { $trpc } = useNuxtApp();

    // let cart = await useFetch('/api/cart',{
    //   method:"POST",

    // })

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

    } else {
      cart = await $trpc.cart.update.mutate({
        where: {
          userId: AppState.account.id,
        },
        data: {
          products: {
            connect: {
              id: AppState.activeProduct.id,
            },
            update: {
              data: {
                quantity: {
                  increment: 1,
                },
              },
              where: { id: AppState.activeProduct.id },
            },
          },
        },
      });
    }
  }

  async removeFromCart(product){
   let cart = await $trpc.cart.findUnique.useQuery({
     where: { userId: AppState.account.id },
   });

 if (cart) {
  await $trpc.cart.update.mutate({
    where: { id: cart.data.value.id },
    data: {
      products: {
        delete: {
          id: product.id,
        },
      },
    },
  });

  AppState.userCart.products = AppState.userCart.products.filter(
    (p) => p.id != product.id
  );
 }

  }

  async getCartByUserId(){
      let cart = await $trpc.cart.findUnique.useQuery({
        where: { userId: AppState.account.id },
      });
      if (!cart) {
    logger.log('bad id')
      }
      return cart
  }

}
export const cartService = new CartService();
