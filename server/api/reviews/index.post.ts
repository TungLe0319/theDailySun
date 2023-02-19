import Stripe from "stripe";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const stripe = event.context.stripe;
  const prisma = event.context.prisma;
  const session = await getServerSession(event);
  const user = session?.user;
  const { reviewData } = await readBody(event);

  if (!user) {
    createError("Not Logged In");
  }
  if (user.role != "USER" || "ADMIN") {
    createError("Now Allowed");
  }
  if (!reviewData) {
    createError("Need To Send In A Body");
  }

  const review = await prisma.review.create({
    data:{
      user: user,
      body : reviewData.body,
      product: reviewData.product
    }
  })
  return review;
});
