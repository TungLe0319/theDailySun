import { Cart } from "@prisma/client";
import Stripe from "stripe";
import { getServerSession } from "#auth";
// import { never } from 'zod';

export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma;

  const session = await getServerSession(event);
  const userId = session?.user.id;

  const body = await readBody(event);
if (!userId) {
 return  createError("you must be logged in to add products to a cart");
}
if (!body || !body.receiptId || !body.receiptUrl ) {
 return  createError("No receiptId provided");
}

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      receipts: {},
    },
  });

  const receiptExists = user?.receipts?.find(
    (r) => r.receiptId == body.receiptId
  );
 if (receiptExists ) {
   return createError("This Receipt Already Exists");

 }
 const updatedUser = await prisma.user.update({
   where: {
     id: userId,
   },
   data: {
     receipts: {
       create: {
         url: body.receiptUrl,
         receiptId: body.receiptId
       },
     },
   },
   include: {
     receipts: {},
   },
 });

 return updatedUser

});
