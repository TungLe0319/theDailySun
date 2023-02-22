import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const session = await getServerSession(event)
  const user = session?.user
  const { reviewData } = await readBody(event)
  reviewData.user = user
  if (!user) {
    createError('Not Logged In')
  }
  if (!reviewData) {
    createError('Need To Send In A Body')
  }
  const review = await prisma.review.create({
    data: {
      userId: user.id,
      body: reviewData.body,
      productId: reviewData.product.id,
      rating: reviewData.rating
    },
    include: {
      user: {}
    }
  })
  return review
})
