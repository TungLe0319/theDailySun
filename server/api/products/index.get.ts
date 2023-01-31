export default defineEventHandler((event) => {
  const prisma = event.context.prisma
  const products = prisma.product.findMany({})
  return products
})
