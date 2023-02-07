import Stripe from "stripe";
import { getServerSession } from "#auth";
export default defineEventHandler(async (event) => {
  const stripe = event.context.stripe;
  const prisma = event.context.prisma;
  const session = await getServerSession(event);
  const userId = session?.user.id;
    const body = await readBody(event);
    const productData = body.productData;

  if (!userId) {
    createError("you must be logged in to add products to a cart");
  }


  const stripeProduct = await stripe.products.create({
    name: productData.title,
    images: [productData.img],
    default_price_data: {
      currency: "usd",
      unit_amount_decimal: (productData.price * 100).toString(),
    },
  });
  productData.priceID = stripeProduct.default_price?.toString() || null;
  productData.stripeID = stripeProduct.id;
  const product = await prisma.product.create({
    data: productData,
  });

  return product;
});
