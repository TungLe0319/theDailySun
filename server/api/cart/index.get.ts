import { Cart } from '@prisma/client'
import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  // const { id } = getRouterParams(event)
  const session = await getServerSession(event)
  if (session?.user) {
    let cart: Cart | null = await prisma.cart.findUnique({
      where: {
        userId: session?.user.id
      },
      include: {
        products: {}
      }
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: session.user.id
        }
      })
    }
    console.log(cart)

    const cartTotal = getTotal(cart.products)
    return { cartTotal, cart }
  }
  return session?.user ? session.user : 'no user'
})
function getTotal (array: import('@prisma/client').Product[]) {
  let total = 0

  for (const product of array) {
    const amount = product.price * (product.quantity || 0)
    total += amount
  }
  return total
}
