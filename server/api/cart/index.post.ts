import { Cart } from '@prisma/client'
import Stripe from 'stripe'
import { getServerSession } from '#auth'
// import { never } from 'zod';
interface newProduct {
  id: number;
  price: GLfloat
  title: string
  description : string
  audience: string
  productImg: string
  priceID:string
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
  const body = await readBody(event)
  const productData = body.productData
  if (!body) {
    createError('need to send in a body')
  }
  if (!body.quantity && !body.id) {
    createError('error')
  }
  const cart = await prisma.cart.update({
    where: {
      userId
    },
    data: {
      products: {
        create: {
          title: productData.title,
          description: productData.description,
          quantity: productData.quantity,
          img: productData.img,
          price: productData.price,
          type: productData.type,
          audience: productData.audience,
          priceID: productData.priceID
        }

      }
    },
    include: { products: true }
  })

  // const product = await stripe.products.create({
  //   name: productData.title,
  //   images:[productData.img],
  // default_price_data:{
  //   currency:'usd',
  //   unit_amount:productData.price
  // }
  // });

  // const paymentLink = await stripe.paymentLinks.create({
  //   line_items: [
  //     {
  //       price:product.default_price?.toString() || '',
  //       quantity: productData.quantity,
  //     },
  //   ],
  // });

  // const stripeSession = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   line_items: [
  //     {
  //       price: product.default_price?.toString() || "",
  //       quantity: productData.quantity,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: "https://example.com/success",
  //   cancel_url: "https://example.com/cancel",
  // });
  // let cartTotal = 0

  // for (const product of cart.products) {
  //   const amount = product.price * (product.quantity || 0)

  // cartTotal += amount

  return { cart }
})
