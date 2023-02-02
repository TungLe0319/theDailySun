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
      this.cart = cart.value?.cart
      this.total = cart.value?.cartTotal
      this.products = cart.value?.cart?.products
    }
  }
  // getters: {
  //   cartTotal: (state) => {
  //     let price
  //     for (const product of state.cart.products) {
  //       price += (product.price * product.quantity)
  //     }
  //     return price
  //   }
  // }
})
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
// }
