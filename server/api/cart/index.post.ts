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
<<<<<<< HEAD
  const body  = await readBody(event)
  const productData = body.productData
=======
  const body = await readBody(event)
>>>>>>> e71cce4 (almost)
  if (!body) {
    createError('need to send in a body')
  }
  if (!body.quantity && !body.id) {
    createError('error')
  }
<<<<<<< HEAD
 const cart: Cart = await prisma.cart.update({
where:{
userId:userId
},
   data: {
     products: {
       create: {
        title: productData.title,
        description: productData.description,
        quantity : productData.quantity,
        img: productData.img,
        price:  productData.price,
        stripe: productData.stripe,
        productImg: productData.productImg,
        type: productData.type,
        audience: productData.audience
       },
=======
  const cart: Cart = await prisma.cart.update({
    where: {
      userId
    },
    data: {
      products: {
        create: {
          title: body.productData.title,
          description: body.productData.description,
          quantity: body.productData.quantity,
          img: body.productData.img,
          price: body.productData.price,
          stripe: body.productData.stripe,
          productImg: body.productData.productImg,
          type: body.productData.type,
          audience: body.productData.audience
        }
>>>>>>> e71cce4 (almost)

      }
    },
    include: { products: {} }
  })

  let cartTotal = 0

  for (const product of cart.products) {
    const amount = product.price * (product.quantity || 0)

<<<<<<< HEAD
    cartTotal += amount
  }
  return {cart ,cartTotal}
=======
  //   cartTotal += amount
  // }
  return { cart }
>>>>>>> e71cce4 (almost)
})
