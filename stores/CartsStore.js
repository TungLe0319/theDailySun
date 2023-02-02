export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: null,
    total: 0
  }),
  actions: {
    async getCart () {
      const { data: cart } = await useFetch('/api/cart')
      this.cart = cart.value?.cart
      this.total = cart.value?.cartTotal
    }
  },
  getters: {
    cartTotal: (state) => {
      let price
      for (const product of state.cart.products) {
        price += (product.price * product.quantity)
      }
      return price
    }
  }
})
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
// }
