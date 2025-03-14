import { Cart } from '@prisma/client'
import Stripe from 'stripe'
import { getServerSession } from '#auth'
// import { never } from 'zod';

export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const session = await getServerSession(event)
  const userId = session?.user.id
  if (!userId) {
    createError('you must be logged in to add products to a cart')
  }

  const { id } = getRouterParams(event)

  const foundReview = await prisma.review.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (foundReview?.userId !== userId) {
    return createError('Unauthorized Action')
  }

  const review = await prisma.review.delete({
    where: {
      id: parseInt(id)
    },
    include: {
      user: {}
    }
  })

  return { message: 'successfully Deleted', review }
})
