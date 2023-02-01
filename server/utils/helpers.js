// import { Product } from '../../models/Product'
export default async function getTotal (array: import('@prisma/client').Product[]) {
  let total = 0
  for await (const product of array) {
    const price = product.price * (product.quantity || 0)
    total += price
  }
  return total
}
