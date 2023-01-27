export default defineEventHandler(event => event.context.prisma.product.findUnique({
  where: {id: '1'}
}))
