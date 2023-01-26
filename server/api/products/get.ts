export default defineEventHandler(event => event.context.prisma.product.findMany())
