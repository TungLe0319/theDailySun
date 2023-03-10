import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const { id } = getRouterParams(event)
  const { productData } = await readBody(event)
  const data = await getServerSession(event)
  const user = data?.user
  const cart = await prisma.cart.findUnique({
    where: {
      userId: user.id
    }
  })

  if (!cart) {
    const newCart = await prisma.cart.create({
      data: {
        userId: user.id,

        products: {
          connect: {
            id: parseInt(id)
          }
        }
      },
      include: {
        products: {}
      }
    })

    let cartTotal = 0

    newCart?.products?.forEach(
      p => (cartTotal += p.price * (p.quantity || 0))
    )

    return { newCart, cartTotal }
  }

  const updatedCart = await prisma.cart.update({
    where: {
      userId: user.id
    },
    data: {
      products: {
        connect: {
          id: parseInt(id)
        },
        update: {
          where: {
            id: parseInt(id)
          },
          data: {
            quantity: productData.quantity
          }
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

  let cartTotal = 0

  updatedCart?.products?.forEach(
    p => (cartTotal += p.price * (p.quantity || 0))
  )

  return { updatedCart, cartTotal }
})
