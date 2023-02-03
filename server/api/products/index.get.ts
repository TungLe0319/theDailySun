export default defineEventHandler((event) => {
  const prisma = event.context.prisma
  // const userId = event.context.userId
  const products = prisma.product.findMany({
     where:{
      cartId : 2
     }
  })
  return products
})
