import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function createStripeSession(amount, currency, successUrl, cancelUrl) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          name: 'My Product',
          amount,
          currency,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    })
    return session.id
  } catch (error) {
    throw new Error(error.message)
  }
}
