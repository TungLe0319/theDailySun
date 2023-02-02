import { Cart } from '@prisma/client'
import { getServerSession } from '#auth'
// import { never } from 'zod';

interface newProduct {
  id: number;
  quantity: number | any;
}
export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const session = await getServerSession(event)
  const userId = session?.user.id
  if (!userId) {
    createError('you must be logged in to add products to a cart')
  }
  const body: newProduct = await readBody(event)
  if (!body) {
    createError('need to send in a body')
  }
  if (!body.quantity && !body.id) {
    createError('error')
  }
  const cart: Cart = await prisma.cart.update({
    where: {
      userId
    },
    data: {
      products: {
        connect: {
          id: body.id
        },
        update: {
          where: {
            id: body.id
          },
          data: {
            quantity: body.quantity

          }
        }
      }
    }
  })
  let cartTotal = 0

  for (const product of cart.products) {
    const amount = product.price * (product.quantity || 0)

    cartTotal += amount
  }
  return { cartTotal, cart }
})
