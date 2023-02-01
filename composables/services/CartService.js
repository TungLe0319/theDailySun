class CartService {
  // Adding to cart is doing a Put on the cart where we create or add a product to a cart
  // Deleting a cart is also a put where we are removing a product from a cart, have it set up that if cart.products[] <= 0 it deletes the cart

  async addToCart (id) {
    const res = await useFetch(`/api/cart/${id}`, {
      method: 'PUT',
      body: {
        id
      }
    })
    AppState.userCart = res?.data?.value?.cart

    AppState.cartTotal = res?.data?.value?.cartTotal
  }

  async getCartByUserId () {
    const {data} = useSession()
    let id = data.value.user.id
    const { data: res } = await useFetch(`/api/cart/${id}`)
logger.log(res.value)
    // AppState.userCart = res.value.cart

    // AppState.cartTotal = res?.value?.cartTotal
  }

  async removeFromCart(product) {
    let id = product.cartId
    const res = await useFetch(`/api/cart/${id}`, {
      method: 'DELETE',
      body: {
        product
      }
    })

    logger.log(res.data.value)
    // AppState.userCart = res?.data?.value?.cart;

    // AppState.cartTotal = res?.data?.value?.cartTotal;
    // AppState.userCart.products = AppState.userCart?.products?.filter(
    //   (c) => c.id != product.id
    // );
  }
}
export const cartService = new CartService()
