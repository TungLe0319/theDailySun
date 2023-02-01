import { Cart } from '@prisma/client'
// import { array } from 'zod'
import { getServerSession } from '#auth'
// import { getTotal } from '~~/server/utils/helpers'
// import { getTotal } from '~~/server/utils/helpers'
// let cart : Cart | null
// const cartTotal = 0 as Number
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

  // eslint-disable-next-line array-callback-return
  array.map((product) => {
    const amount = product.price * (product.quantity || 0)
    total += amount
  })
  // total += amount
  return total
}
