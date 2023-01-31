// type product = import('@prisma/client').Product
export const AppState = reactive({
  user: null,
  account: {},
  products: [],
  activeProduct: {},
  hats: [],
  glasses: [],
  userCart: {}
})
