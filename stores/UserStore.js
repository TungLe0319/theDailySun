export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  getters: () => ({

  }),
  actions: {
    setUser (user) {
      this.user = user
    }
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
