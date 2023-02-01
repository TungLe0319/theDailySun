class CartService {
  // Adding to cart is doing a Put on the cart where we create or add a product to a cart
  // Deleting a cart is also a put where we are removing a product from a cart, have it set up that if cart.products[] <= 0 it deletes the cart

  async addToCart (productData) {
    const id = productData.id
    // const post = await useApi.post('/api/cart/' + id)

    const res = await useFetch(`/api/cart/${id}`, {
      method: 'PUT',
      body: {
        productData
      }
    })
    logger.log(res.data.value)
    AppState.userCart = res?.data?.value.cartTotal

    // AppState.cartTotal = res?.data?.value?.cartTotal
  }

  async getCartByUserId () {
    // const { data } = useSession()
    // const id = data.value.user.id
    const headers = useRequestHeaders(['cookie'])
    const { data: res } = await useFetch('/api/cart/', { headers })
    logger.log(res.value)
    AppState.userCart = res?.value?.cart

    AppState.cartTotal = res?.value?.cartTotal
  }

  async removeFromCart (id) {
    const res = await useFetch(`/api/cart/${id}`, {
      method: 'DELETE',

      body: {
        id
      }
    })

    logger.log(res.data.value)
    // eslint-disable-next-line eqeqeq
    AppState.userCart.products = AppState.userCart.products.filter(p => p.id != id)

    AppState.cartTotal = res?.data?.value?.cartTotal
  }
}
export const cartService = new CartService()
