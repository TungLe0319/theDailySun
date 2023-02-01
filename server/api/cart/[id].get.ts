export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const { id } = getRouterParams(event)
  const cart = await prisma.cart.findUnique({
    where: {
      userId: id
    },
    include: {
      products: {

      }
    }
  })

  let cartTotal = 0

  cart?.products?.forEach(p => cartTotal += (p.price *
  (p.quantity || 0)))

  return { cartTotal, cart }
})
