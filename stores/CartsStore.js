import { acceptHMRUpdate } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: null,
    total: 0,
    products: []
  }),
  actions: {
    getCart () {
      const headers = useRequestHeaders(['cookie'])
      const { data: cart } = useFetch('/api/cart', { headers })
      logger.log(cart.value)
      this.cart = cart?.value?.cart
      this.total = () => {
        let total = 0
        const amount = cart.value.products.map(product => product.price * (product.quantity || 0))
        total += amount
        return total
      }
      this.products = cart?.value?.products
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
      let price = 0
      for (const product of state.products) {
        price += (product.price * product.quantity)
      }
      return price
    }
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
