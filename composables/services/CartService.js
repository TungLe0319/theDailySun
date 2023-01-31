class CartService {
  async addToCart(id) {
    const res = await useFetch(`/api/cart/${id}`, {
      method: "PUT",
      body: {
        id,
      },
    });
    AppState.userCart = res?.data?.value?.cart;

    AppState.cartTotal = res?.data?.value?.cartTotal;
  }

  async getCartByUserId(id) {
    const res = await useFetch(`/api/cart/${id}`);

    AppState.userCart = res?.data?.value?.cart;

    AppState.cartTotal = res?.data?.value?.cartTotal;
  }

  async removeFromCart(product) {
    let id = product.id
    const res = await useFetch(`/api/cart/${id}`, {
      method:'DELETE',
      body: {
       product
      },
    });

    logger.log(res.data.value)
    // AppState.userCart = res?.data?.value?.cart;

    // AppState.cartTotal = res?.data?.value?.cartTotal;
    // AppState.userCart.products = AppState.userCart?.products?.filter(
    //   (c) => c.id != product.id
    // );
  }
}
export const cartService = new CartService();
