
export default defineEventHandler((event) => {
  const prisma = event.context.prisma
  const { id } = getRouterParams(event)
  const product = prisma.product.findUnique({
    where: {
      id: parseInt(id)
    },
    include:{
      reviews:{
        include:{
          user:{}
        }
      }
    }
  })

  return product
})
