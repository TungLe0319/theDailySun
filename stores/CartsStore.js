/* eslint-disable eqeqeq */
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
      // logger.log(cart.value)
      this.cartId = cart?.value?.id
      const products = cart.value.products
      this.products = products
      let amount = 0
      for (const product of products) {
        const price = product.price * (product.quantity || 0)
        amount += price
      }
      this.total = amount
    },
    async add (productData) {
      const { data: cart } = await useFetch('/api/cart', {
        method: 'POST',
        body: {
          productData
        }
      })
      // logger.log(cart.value)

      // this.products = cart.value.products
    },
    remove (id) {
      useFetch(`/api/cart/${id}`, {
        method: 'DELETE',

        body: {
          id
        }
      })
      this.products = this.products.filter(p => p.id != id)
    },
    async checkout (products) {
      const listItems = products.map(p => ({
        quantity: p.quantity,
        price: p.priceID
      }))

      const { data: createStripeSession } = await useFetch('/api/checkout', {
        method: 'POST',
        body: {
          listItems
        }
      }
      )

      navigateTo(createStripeSession.value, { external: true })
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
