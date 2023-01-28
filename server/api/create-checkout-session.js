import stripe from 'stripe'
import { config } from '@nuxtjs/config'

const stripeClient = stripe(process.env.STRIPE_PRIVATE_KEY)


export default defineEventHandler((event) => {



  // async post({ request, response }) {
  //   try {
  //     const session = await stripeClient.checkout.sessions.create({
  //       payment_method_types: ["card"],
  //       mode: "payment",
  //       line_items: request.body.items.map((item) => {
  //         // Retrieve the store item based on the item ID
  //         const storeItem = storeItems.get(item.id);
  //         return {
  //           price_data: {
  //             currency: "usd",
  //             product_data: {
  //               name: storeItem.name,
  //             },
  //             unit_amount: storeItem.priceInCents,
  //           },
  //           quantity: item.quantity,
  //         };
  //       }),
  //       success_url: `${config.env.CLIENT_URL}/success.html`,
  //       cancel_url: `${config.env.CLIENT_URL}/cancel.html`,
  //     });
  //     response.json({ url: session.url });
  //   } catch (e) {
  //     response.status(500).json({ error: e.message });
  //   }
  // },

});

