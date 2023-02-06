
import { Cart } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";

export default defineEventHandler(async(event) => {



const stripe = event.context.stripe

const session = await getServerSession(event);
const userId = session?.user.id;
if (!userId) {
  createError("you must be logged in to add products to a cart");
}
const body  = await readBody(event);



// const products = await stripe.products.list()


  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: body.listItems,
    mode: "payment",
    success_url:
      "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/cart",
  });

  const payment = await stripe.paymentIntents.retrieve(stripeSession.payment_intent?.toString() || '')
const receipt = await stripe.charges.retrieve(payment.latest_charge?.toString()|| '')
return stripeSession.url
})
