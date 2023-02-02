import { Cart } from '@prisma/client'
import { getServerSession } from '#auth'
// import { never } from 'zod';

/* eslint-disable @typescript-eslint/no-unused-vars */
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

  //   const { id } = event.context.body

  // let cart = await $trpc.cart.findUnique.useQuery({
  //       where: { userId: AppState.account.id },
  //     });
  //     if (!cart) {
  //       cart = await $trpc.cart.create.mutate({
  //         data: {
  //           products: {
  //             connect: {
  //               productId: productId,
  //             },
  //           },
  //           user: {
  //             connect: {
  //               id: AppState.account.id,
  //             },
  //           },
  //         },
  //       });
  //     } else {
  //       cart = await $trpc.cart.update.mutate({
  //         where: {
  //           userId: AppState.account.id,
  //         },
  //         data: {
  //           products: {
  //             connect: {
  //               id: AppState.activeProduct.id,
  //             },
  //             update: {
  //               data: {
  //                 quantity: {
  //                   increment: 1,
  //                 },
  //               },
  //               where: { id: AppState.activeProduct.id },
  //             },
  //           },
  //         },
  //       });
  //     }
  return event
})
