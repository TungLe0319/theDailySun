import { usePrisma } from '@sidebase/nuxt-prisma'
// import { Cart, PrismaClient } from '@prisma/client'
import { getServerSession } from '#auth'

// const prismaClient = new PrismaClient()
export default defineEventHandler(async (event) => {
   const prisma = event.context.prisma;

  // const { id } = getRouterParams(event)
  const session = await getServerSession(event)
  // if (!session?.user) {
  //   return 'need to be logged in'
  // }
  const cart = await prisma.cart.findUnique({ where: { userId: session?.user.id }, include: { products: {} } })
  if (cart) {
    return cart
  }
  if (session?.user && !cart) {
    const newCart =await  prisma.cart.create({ data: { userId: session?.user.id } })
    return newCart
  }

  // if (session?.user) {
  //   let cart = await event.context.prisma.cart.findUnique({
  //     where: {
  //       userId: session?.user.id
  //     },
  //     include: {
  //       products: {}
  //     }
  //   })

  //   if (!cart) {
  //     cart = await event.context.prisma.cart.create({
  //       data: {
  //         userId: session.user.id
  //       }
  //     })
  //   }
  //   console.log(cart)

  //   // const cartTotal = getTotal(cart.products)
  //   return cart
  // }
  // return session?.user ? session.user : 'no user'
})
// function getTotal (array: import('@prisma/client').Product[]) {
//   let total = 0

//   for (const product of array) {
//     const amount = product.price * (product.quantity || 0)
//     total += amount
//   }
//   return total
// }
