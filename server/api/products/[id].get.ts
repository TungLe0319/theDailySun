
export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(event.context.params.id)
    }
  })

  return product
})
