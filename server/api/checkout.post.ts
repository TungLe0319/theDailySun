
import { Cart } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";

export default defineEventHandler(async(event) => {



const stripe = useStripe(event)

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
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });


return stripeSession.url
})