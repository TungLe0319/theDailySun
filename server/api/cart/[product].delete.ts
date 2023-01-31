export default defineEventHandler((event) => {
    const prisma = event.context.prisma
let productId = event.context.params.id
let cartId = event.context.params.cartId
// let cart = prisma.cart.findUnique({
//   where:{
//     id :
//   }
// })


  prisma.cart.update({
    where: { id:cartId },
    data: {
      products: {
        delete: {
          id: productId
        },
      },
    },
  });



  return 'Product Removed From Cart'
})
