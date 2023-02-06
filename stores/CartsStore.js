import { acceptHMRUpdate } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartId: null,
    total: 0,
    products: []
  }),
  actions: {
    async getCart () {
      const headers = useRequestHeaders(['cookie'])
      const { data: cart } = await useFetch('/api/cart', { headers })
      logger.log(cart.value)
      this.cartId = cart?.value?.id
      this.products = cart?.value?.products
      for (const product of this.products) {
        const price = product.price * (product.quantity || 0)
        this.total += price
      }
    },
    add (productData) {
      const { data: cart } = useFetch('/api/cart', {
        method: 'POST',
        body: {
          productData
        }
      })
      this.cart = cart.value?.cart

      this.products = cart.value?.products
    },
    remove (id) {
      useFetch(`/api/cart/${id}`, {
        method: 'DELETE',

        body: {
          id
        }
      })
      this.products = this.products.filter(p => p.id != id)
    }
  },
  getters: {
    cartTotal: (state) => {
      if (state.products) {
        let price = 0
        for (const product of state.products) {
          price += (product.price * product.quantity)
        }
        return price
      }
    }
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
