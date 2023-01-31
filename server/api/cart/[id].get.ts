export default defineEventHandler((event) => {
    const prisma = event.context.prisma
 const { id } = getRouterParams(event)
  const cart = prisma.cart.findUnique({
    where:{
     userId: id
    },
    include:{
      products:{

      }
    }
  })

  return cart
})
