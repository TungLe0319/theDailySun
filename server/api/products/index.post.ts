import { Cart } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";
interface newProduct {
  id: number;
  price: GLfloat;
  title: string;
  description: string;
  audience: string;
  productImg: string;

  priceID:string;
  type: string;
  img: string;
  quantity: number;
  stripe: string;
  cartId: number;
}
export default defineEventHandler(async (event) => {
  const stripe = new Stripe(process.env.STRIPE_SK || "", {
    apiVersion: "2022-11-15",
  });

  const prisma = event.context.prisma;
  const session = await getServerSession(event);
  const userId = session?.user.id;
  if (!userId) {
    createError("you must be logged in to add products to a cart");
  }
  const body = await readBody(event);
  const productData = body.productData;

 const stripeProduct = await stripe.products.create({
   name: productData.title,
   images: [productData.img],
   default_price_data: {
     currency: "usd",
     unit_amount_decimal: (productData.price * 100).toString(),
   },
 });
 productData.priceID = stripeProduct.default_price?.toString() || null;
productData.stripeID = stripeProduct.id
  const product = await prisma.product.create({
    data: productData
  });






  return product;
});
