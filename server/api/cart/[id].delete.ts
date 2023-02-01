import { Cart } from '@prisma/client'
import { getServerSession } from '#auth'

// import { getTotal } from '~~/server/utils/helpers'

export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const { id } = getRouterParams(event)
  const data = await getServerSession(event)
  const user = data?.user
  const updatedCart: Cart = await prisma.cart.update({
    where: {
      userId: user.id
    },
    data: {
      products: {
        disconnect: {
          id: parseInt(id)
        }
      }
    },
    include: {
      products: {}
    }
  })

  if (updatedCart.products.length <= 0) {
    await prisma.cart.delete({
      where: {
        userId: user.id
      }
    })
  }
  const cartTotal = getTotal(updatedCart.products)
  return { updatedCart, cartTotal }
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
