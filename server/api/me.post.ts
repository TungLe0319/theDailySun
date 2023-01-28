export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const accountData = await readBody(event)
  const account = prisma.user.create(accountData)
  return account
})
