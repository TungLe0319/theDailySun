
import { Cart } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";

export default defineEventHandler(async(event) => {




const stripe = new Stripe(
  "sk_test_51MQKqcKdq9SDDIVB4REqB4e3Gx1JqcwLeSY16x5dfeUU2h7UXbq3Mj25Y1HxlB5DN9vDu7JKRD7GUI1yaJ5iPQRf00rMP6CjNi",
  {
    apiVersion: "2022-11-15",
  }
);

const session = await getServerSession(event);
const userId = session?.user.id;
if (!userId) {
  createError("you must be logged in to add products to a cart");
}
const body  = await readBody(event);
const productData = body.productData;


// const products = await stripe.products.list()


  // const stripeSession = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   line_items: [
  //     {
  //       price: ,
  //       quantity: ,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: "https://example.com/success",
  //   cancel_url: "https://example.com/cancel",
  // });

 return body
})
