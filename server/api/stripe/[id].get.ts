import { Cart, prisma } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";

export default defineEventHandler(async (event) => {

  const stripe = event.context.stripe;
  const { id } = getRouterParams(event);
  const session = await getServerSession(event);
  const userId = session?.user.id;
  // const body = await readBody(event);
  // const receiptData = body.receiptData;



  const stripeSession = await stripe.checkout.sessions.retrieve(id);

  const payment = await stripe.paymentIntents.retrieve(
    stripeSession.payment_intent?.toString() || ""
  );
  const receipt = await stripe.charges.retrieve(
    payment.latest_charge?.toString() || ""
  );


  return receipt;
});