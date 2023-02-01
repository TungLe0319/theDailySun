import { getServerSession } from "#auth"


export default defineEventHandler(async (event) => {
   const prisma = event.context.prisma
  const {id} = getRouterParams(event)
  const data =  await getServerSession(event)
  const user = data?.user


 let updatedCart = await  prisma.cart.update({
  where:{
    userId:user.id
  },
data:{
  products:{
disconnect:{
  id: parseInt(id)
}
  }
},
include:{
  products:{}
}
})

if (updatedCart.products.length <= 0) {


await prisma.cart.delete({
  where:{
    userId: user.id
  }
})

}




   let cartTotal = 0

updatedCart?.products?.forEach(p=> cartTotal += (p.price *
  (p.quantity ||0 ) ))

  return {updatedCart,cartTotal}





})
