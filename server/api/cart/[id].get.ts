export default defineEventHandler((event) => {
    const prisma = event.context.prisma
let id =event.context.params.id
  const cart = prisma.cart.findUnique({
    where:{
    id: id
    }
  })

  return cart
})
