import { getServerSession } from "#auth"


export default defineEventHandler(async (event) => {
    const prisma = event.context.prisma
  const {product} = getRouterParams(event)
  const data =  await getServerSession(event)
  const user = data?.user




//  let updatedCart = await  prisma.cart.update({
//   where:{
//     userId:user.id
//   },
// data:{
//   products:{

//     update:{
//       where:{
//           id:parseInt(id)
//       },
//       data:{
//         quantity:{
//           decrement:1
//         }
//       }
//     }
//   }
// },
// include:{
//   products:{}
// }
// })


// if (updatedCart.products.length <= 0) {


// await prisma.cart.delete({
//   where:{
//     userId: user.id
//   }
// })

// }

  return product


})
