import Stripe from 'stripe'

// @ts-ignore
export function useStripe (event: H3Event): Stripe {
  return event.context.stripe
}
