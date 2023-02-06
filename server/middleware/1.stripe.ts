// import Stripe from "stripe";

import Stripe from 'stripe'

// import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripe : Stripe
declare module 'h3' {
  interface H3EventContext {
    stripe: Stripe;
  }
}
// let stripe: any
export default eventHandler((event) => {
  if (!stripe) {
    // @ts-ignore
    stripe = new Stripe(process.env.STRIPE_SK, { apiVersion: '2022-11-15' })
  }
  event.context.stripe = stripe
})
// // @ts-ignore
// export function useStripe (event: H3Event) : Stripe {
//   return event.context.stripe
// }
