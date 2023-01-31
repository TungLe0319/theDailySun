
export default defineEventHandler((event) => {
  // const prisma = event.context.prisma
  const productId = getRouterParams(event)
  // const product = await prisma.product.findUnique({
  //   where: {
  //     id: productId
  //   }
  // })

  return productId
})
