class CartService {
  async addToCart(id) {
    let cart = await useFetch(`/api/cart/${id}`, {
      method: "PUT",
      body: {
        id,
      },
    });
    logger.log(cart.data.value);
  }

  async getCartByUserId(id) {
    const res = await useFetch(`/api/cart/${id}`);

    AppState.userCart = res.data.value;
    let total = AppState.cartTotal

    if (AppState.userCart.products) {
      AppState.userCart.products.map((p) => (total +=( p.price * p.quantity)));

      AppState.cartTotal = total;
    }
  }

  async removeFromCart(product) {
    const updatedCart = await useFetch(`/api/cart/:product`, {
      method: "PUT",
      body: {
        product,
      },
    });
    logger.log(updatedCart.data.value);
    // AppState.userCart.products = AppState.userCart.products.filter(c=> c.id != product.id)
  }
}
export const cartService = new CartService();
