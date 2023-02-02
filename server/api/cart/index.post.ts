import { Cart } from '@prisma/client'
import { getServerSession } from '#auth'
// import { never } from 'zod';

interface newProduct {
  id: number;
  price: GLfloat
  title: string
  description : string
  audience: string
  productImg: string
  type: string
  img: string
  quantity: number
  stripe: string
   cartId : number
}
export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma
  const session = await getServerSession(event)
  const userId = session?.user.id
  if (!userId) {
    createError('you must be logged in to add products to a cart')
  }
  const body  = await readBody(event)
  if (!body) {
    createError('need to send in a body')
  }
  if (!body.quantity && !body.id) {
    createError('error')
  }
 const cart: Cart = await prisma.cart.update({
where:{
userId:userId
},
   data: {
     products: {
       create: {
        title: body.productData.title,
        description: body.productData.description,
        quantity : body.productData.quantity,
        img: body.productData.img,
        price:  body.productData.price,
        stripe: body.productData.stripe,
        productImg: body.productData.productImg,
        type: body.productData.type,
        audience: body.productData.audience
       },

     },
   },
   include:{products:{}}
 });

  // let cartTotal = 0

  // for (const product of cart?) {
  //   const amount = product.price * (product.quantity || 0)

  //   cartTotal += amount
  // }
  return {cart.products }
})
