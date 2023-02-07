import { Cart } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";

export default defineEventHandler(async (event) => {
  // const stripe = event.context.stripe;

  // const session = await getServerSession(event);
  // const userId = session?.user.id;
  // if (!userId) {
  //   createError("you must be logged in to add products to a cart");
  // }
  // const body = await readBody(event);

  // // const products = await stripe.products.list()

  // // const stripeSession = await stripe.checkout.sessions.retrieve(
  // //   body.sessionId
  // // );

  // return body;
  return 'hi'
});
