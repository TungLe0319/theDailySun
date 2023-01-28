
export default defineEventHandler((event) => {
// This is your test secret API key.
debugger
const stripe = require('stripe')('pk_test_51MQKqcKdq9SDDIVB50Bq1oUxTITbqQxOFOhO9XhjPy8R1QptLtjtGKOWd9XXRxOPkLiwVdefDp74iPgLkwRNFZG200K5bwrmFc');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1MUzkdKdq9SDDIVBIP5CnNtG',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 4242'));
});
