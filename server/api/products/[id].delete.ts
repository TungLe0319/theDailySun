import { Cart } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";

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

 const id = body.productIDS.id
 const stripeID = body.productIDS.stripeID
  const deleted = await stripe.products.update(stripeID,{
    active:false
  });


  const product = await prisma.product.delete({
   where:{
    id : id
   }
  });

  return { message :"successfully deleted",product,deleted};
});
