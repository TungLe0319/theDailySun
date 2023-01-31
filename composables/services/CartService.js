class CartService {
  async addToCart (productId) {
    const cart = await useFetch('/api/cart', {
      method: 'POST',
      body: {
        productId
      }
    })
  }

  async getCartByUserId () {
    const id = 'cldh1ctis0000ua08yo9xvbge'
    const res = await useFetch(`/api/cart/${id}`, {})

    AppState.userCart = res.data.value
    logger.log(res.data)
    // return cart
  }

  async removeFromCart (product) {
    const updatedCart = await useFetch('/api/cart/:product', {
      method: 'PUT',
      body: {
        product
      }
    })
    logger.log(updatedCart.data.value)
    // AppState.userCart.products = AppState.userCart.products.filter(c=> c.id != product.id)
  }
}
export const cartService = new CartService()
