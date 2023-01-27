import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(event.context.params.id)
    }
  })

  return product
})
