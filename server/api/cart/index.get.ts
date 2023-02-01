
import { Cart } from '@prisma/client'
import { getServerSession } from '#auth'
// let cart : Cart | null
// const cartTotal = 0 as Number
export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  // const { id } = getRouterParams(event)
  const session = await getServerSession(event)
  if (session?.user) {
    const cart : Cart | null = await prisma.cart.findUnique({
      where: {
        userId: session?.user.id
      },
      include: {
        products: {

        }
      }
    })
    const cartTotal: number | any = cart?.products?.forEach(p => (p.price *
  (p.quantity || 0)))

    return { cartTotal, cart }
  }
})
