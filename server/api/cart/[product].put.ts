import { Product } from "@prisma/client";

export default defineEventHandler( async (event) => {

    const prisma = event.context.prisma
let   {product} = await readBody(event)
const id = product.id
 let updatedCart = prisma.cart.update({
    where: { id: id },
    data: {
      products: {
        delete: {
          id: id
        },
      },
    },
  });



  return updatedCart
})
