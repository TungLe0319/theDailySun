import { Cart } from "@prisma/client";
import { getServerSession } from "#auth";
// import { never } from 'zod';
import Stripe from "stripe";

export default defineEventHandler(async (event) => {

  const prisma = event.context.prisma;
  const session = await getServerSession(event);
  const userId = session?.user.id;
  if (!userId) {
    createError("you must be logged in to add products to a cart");
  }



const { id } = getRouterParams(event)
 const review = await prisma.review.delete({
  where:{
    id:parseInt(id)
  }
,include:{
  user:{}
}
 })

  return { review };
});
