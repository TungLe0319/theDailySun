// import { Product } from '../../models/Product'
export function getTotal (array: import('@prisma/client').Product[]) {
  let total = 0

  // eslint-disable-next-line array-callback-return
  array.map((product) => {
    const amount = product.price * product.quantity
    total += amount
  })
  // total += amount
  return total
}
