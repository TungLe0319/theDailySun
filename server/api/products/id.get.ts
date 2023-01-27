import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const data = await prisma.product.findUnique({
    where: {
      id: event.context.params.id
    }
  })

  return data
})
