// import { SessionData } from '@sidebase/nuxt-auth/dist/runtime/composables/useSessionState'
// import { getServerSession } from '#auth'

// export default defineEventHandler(async (event) => {
//   const session = await getServerSession(event)
//   // session?.user
//   const prisma = event.context.prisma
//   const email = session?.user?.email
//   const name = session?.user?.name
//   const user = prisma.user.findUnique({
//     where: {
//       AND: [
//         { email },
//         { name }
//       ]
//     }
//   })
//   return user
// })
export default defineEventHandler((event) => {
  return getMethod(event)
  // const session = await getServerSession(event)
  // if (!session?.user?.email && !session?.user?.name && !session?.user?.image) {
  //   throw new Error('email, name, or image are required')
  // }
  // const prisma = event.context.prisma
  // const user = await prisma.user.findUnique({
  //   where: {
  //     AND: [
  //       { email: session?.user?.email },
  //       { name: session?.user?.name },
  //       { image: session?.user?.image }
  //     ]
  //   }
  // })
  // return user
})
