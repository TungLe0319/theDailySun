
import { Cart} from '@prisma/client'
// import { array } from 'zod'
import { getServerSession } from '#auth'
import getTotal from '~~/server/utils/helpers'
// import { getTotal } from '~~/server/utils/helpers'
// let cart : Cart | null
// const cartTotal = 0 as Number
export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  // const { id } = getRouterParams(event)
  const session = await getServerSession(event)
  if (session?.user) {
    let cart : Cart | null = await prisma.cart.findUnique({
      where: {
        userId: session?.user.id
      },
      include: {
        products: {

        }
      }
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: session.user.id
        }
      })
    }

    const cartTotal = await getTotal(cart.products)
    return { cartTotal, cart }
  }
})
// async function getTotal (array: Product[]) {
//   let total = 0
//   for await (const product of array) {
//     const price = product.price * (product.quantity || 0)
//     total += price
//   }
//   return total
// }
