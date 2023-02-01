// import { Product } from '../../models/Product'
export function getTotal (array: import('@prisma/client').Product[]) {
  let total = 0

  amount = array.map((product) => {
    return product.price * product.quantity
  })
  total += amount
  return total
}
